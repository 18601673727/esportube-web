import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import NoSSR from 'react-no-ssr'
import useUnmount from 'react-use/lib/useUnmount'
import { NextContext, NextFunctionComponent } from 'next'
import { Button, Box } from 'grommet'
import { WaveLoading } from 'styled-spinkit'
import { Mutation, Query } from 'react-apollo'
import { useSession } from  'react-use-session'
import GoReportButton from '../components/GoReportButton'
import FrontLayout from '../components/FrontLayout'
import AdBox from '../components/AdBox'
import Player from '../components/Player'
import videoSourceQuery from '../queries/videoSourceQuery'
import browseVideoMutation from '../queries/browseVideoMutation'
import { VideoSource, VideoSourceVariables } from '../queries/types/VideoSource'
import { BrowseVideo, BrowseVideoVariables } from '../queries/types/BrowseVideo'

interface Props {
  id: number | null;
  goto: string | null;
}

type SourceUrl = string | null;

interface DoBrowseProps {
  videoId: number;
  watch: (params: object) => void;
}

const Section = styled(Box)`
  margin: 14px 0;

  .baoyue {
    color: var(--placeholder);
    margin: 10px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }
  .strong {
    color: var(--accent-4);
    border-bottom: 1px solid var(--accent-4);
    font-weight: 900;
  }
`;

const LoadingBox = () => (
  <Box style={{ margin: 'auto' }}>
    <WaveLoading color="var(--brand)"/>
  </Box>
)

const ErrorBox = (error: any) => {
  console.error(error)
  return (<div>Error!</div>)
}

const EmptyBox = () => (
  <>
    <h3 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 800 }}>404</h3>
    <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 200 }}>The video you{"\'"}re looking for couldn{"\'"}t been found.</p>
  </>
)

class BrowseVideoMutation extends Mutation<BrowseVideo, BrowseVideoVariables> {}
class VideoSourceQuery extends Query<VideoSource, VideoSourceVariables> {}

class DoBrowse extends React.Component<DoBrowseProps> {
  componentDidMount() {
    const { videoId, watch } = this.props
    watch({ variables: { videoId } })
  }

  render() {
    return null
  }
}

class DestoryToken extends React.Component<any> {
  componentDidMount() {
    console.log('ready to destory')
  }

  componentWillUnmount() {
    console.log('after destory:', window.sessionStorage.getItem('esportube-s'))
    window.sessionStorage.removeItem('esportube-s')
  }

  render() {
    return this.props.children
  }
}

// TODO: base {last_used_at} baoyue => diffDays(created_at, last_used_at) < 30?
const Watch: NextFunctionComponent<Props> = ({ id, goto }) => {
  if (!id) {
    return <EmptyBox/>
  }

  let source: SourceUrl = null

  const { session: mToken } = useSession('esportube-m', false)
  const { session: sToken, clear: clearS } = useSession('esportube-s', false)
  const subscribed = mToken === 'e8125463314348b1a6a02a77ba63134b'

  useUnmount(clearS)

  return (
    <FrontLayout>
      <NoSSR>
        <AdBox page="watch" position="顶部" />
        {
          subscribed ? (
            <Section background="white">
              <div className="baoyue">
              您正在使用<span className="strong">包月权益</span>免费观看
              </div>
            </Section>
          ) : null
        }

        <Section background="white" pad="medium">
          <BrowseVideoMutation mutation={browseVideoMutation}>
            {(update_videos, { loading, error, data }) => {
              if (error) {
                return <ErrorBox error={error} />
              }

              if (loading) {
                return <LoadingBox/>
              }

              if (!data) {
                return <DoBrowse watch={update_videos} videoId={id}/>
              }

              const browsedVideo = data!.update_videos!.returning[0]

              if (typeof sToken === 'string' && sToken.length > 7) {
                source = sToken.slice()
                return (
                  <DestoryToken>
                    <Player {...browsedVideo} source={source}/>
                  </DestoryToken>
                )
              }

              if (subscribed || browsedVideo.price === 0) {
                return (
                  <VideoSourceQuery query={videoSourceQuery} variables={{ videoId: id }}>
                    {({loading: vLoading, error: vError, data: vData}) => {
                      if (vError) {
                        return <ErrorBox error={vError} />
                      }

                      if (vLoading || !vData) {
                        return <LoadingBox/>
                      }

                      source = vData.videos_by_pk!.source_url

                      return <Player {...browsedVideo} source={source}/>
                    }}
                  </VideoSourceQuery>
                )
              }

              return <Player {...browsedVideo} source={source}/>
            }}
          </BrowseVideoMutation>
        </Section>

        <Section background="white" pad="medium">
          <Button
            reverse
            label="返回"
            style={{ padding: "6px 24px", fontSize: '16px', borderRadius: "8px" }}
            onClick={() => goto === '1' ? Router.replace('/') : Router.back()}
          />
        </Section>
        <AdBox page="watch" position="底部" />
        <GoReportButton/>
      </NoSSR>
    </FrontLayout>
  )
}

Watch.getInitialProps = ({ query }: NextContext) => {
  const id = isNaN(Number(query.id)) ? null : Number(query.id)
  const goto = query.goto ? query.goto.toString() : null
  return { id, goto }
}

export default Watch
