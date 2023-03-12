import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
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
import playVideoMutation from '../queries/playVideoMutation'
import browseVideoMutation from '../queries/browseVideoMutation'
import { VideoSource, VideoSourceVariables } from '../queries/types/VideoSource'
import { PlayVideo, PlayVideoVariables } from '../queries/types/PlayVideo'
import { BrowseVideo, BrowseVideoVariables } from '../queries/types/BrowseVideo'

interface Props {
  videoId: number | null;
  orderNumber: string | null;
}

interface DoValidProps {
  orderNumber: string;
  neverUsed: boolean;
  getVideoSource: (params: object) => void;
}

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

    strong {
      color: var(--accent-4);
      border-bottom: 1px solid var(--accent-4);
      font-weight: 900;
    }
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
class PlayVideoMutation extends Mutation<PlayVideo, PlayVideoVariables> {}
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

class DoValid extends React.Component<DoValidProps> {
  componentDidMount() {
    const { orderNumber, neverUsed, getVideoSource } = this.props
    getVideoSource({ variables: { orderNumber, neverUsed } })
  }

  render() {
    return null
  }
}
// TODO: base {last_used_at} baoyue => diffDays(created_at, last_used_at) < 30?
const Watch: NextFunctionComponent<Props> = ({ videoId, orderNumber }) => {
  const { session } = useSession('esportube', false)
  const neverUsed = session !== 'e8125463314348b1a6a02a77ba63134b'

  return (
    <FrontLayout>
      <AdBox page="watch" position="顶部" />

      {
        !neverUsed ? (
          <Section background="white">
            <div>
              <p className="baoyue">您正在使用<strong>包月权益</strong>免费观看</p>
            </div>
          </Section>
        ) : null
      }

      <Section background="white" pad="medium">
        {
          videoId ? (
            <BrowseVideoMutation mutation={browseVideoMutation}>
              {(update_videos, { loading, error, data }) => {
                if (error) {
                  return <ErrorBox error={error} />
                }

                if (loading) {
                  return <LoadingBox/>
                }

                if (!data) {
                  return <DoBrowse watch={update_videos} videoId={videoId}/>
                }

                const browsedVideo = data!.update_videos!.returning[0]
                let source = null

                if (browsedVideo.price === 0 || !neverUsed) {
                  return (
                    <VideoSourceQuery query={videoSourceQuery} variables={{ videoId }}>
                      {({loading: vLoading, error: vError, data: vData}) => {
                        if (vError) {
                          return <ErrorBox error={vError} />
                        }

                        if (vLoading || !vData) {
                          return <LoadingBox/>
                        }

                        source = vData.videos_by_pk!.source_url

                        return (
                          <Player
                            id={browsedVideo.id}
                            title={browsedVideo.title}
                            price={browsedVideo.price}
                            thumbnail={browsedVideo.thumbnail}
                            source={source}
                          />
                        )
                      }}
                    </VideoSourceQuery>
                  )
                }

                return (
                  <Player
                    id={browsedVideo.id}
                    title={browsedVideo.title}
                    price={browsedVideo.price}
                    thumbnail={browsedVideo.thumbnail}
                    source={null}
                  />
                )
              }}
              </BrowseVideoMutation>
          ) : orderNumber ? (
            <PlayVideoMutation mutation={playVideoMutation}>
              {(update_orders, { loading: playerLoading, error: playerError, data: playerData }) => {
                if (playerError) {
                  return <ErrorBox error={playerError} />
                }

                if (playerLoading) {
                  return <LoadingBox/>
                }

                if (!playerData) {
                  return <DoValid getVideoSource={update_orders} orderNumber={orderNumber} neverUsed={neverUsed} />
                }

                if (!playerData!.update_orders!.returning.length) {
                  return <EmptyBox/>
                }

                const {
                  last_used_at,
                  video: { id, source_url }
                } = playerData!.update_orders!.returning[0]

                return (
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

                      return (
                        <Player
                          id={browsedVideo.id}
                          title={browsedVideo.title}
                          price={browsedVideo.price}
                          thumbnail={browsedVideo.thumbnail}
                          source={source_url}
                        />
                      )
                    }}
                  </BrowseVideoMutation>
                )
              }}
            </PlayVideoMutation>
          ) : (
            <EmptyBox/>
          )
        }
      </Section>

      <Section background="white" pad="medium">
        <Button
          reverse
          label="返回"
          style={{ padding: "6px 24px", fontSize: '16px', borderRadius: "8px" }}
          onClick={() => orderNumber ? Router.replace('/') : Router.back()}
        />
      </Section>

      <AdBox page="watch" position="底部" />

      <GoReportButton/>
    </FrontLayout>
  )
}

Watch.getInitialProps = ({ query }: NextContext) => {
  const videoId = isNaN(Number(query.id)) ? null : Number(query.id)
  const orderNumber = query.ono ? query.ono.toString() : null
  return { videoId, orderNumber }
}

export default Watch
