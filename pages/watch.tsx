import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import useWindowSize from 'react-use/lib/useWindowSize'
import NoSsr from '@material-ui/core/NoSsr'
// import Link from 'next/link'
import { NextContext, NextFunctionComponent } from 'next'
import { Button, Box, Video, Image } from 'grommet'
import { Lock } from 'grommet-icons'
import { WaveLoading } from 'styled-spinkit'
import { Mutation } from 'react-apollo'
import { BrowseVideo, BrowseVideoVariables } from '../queries/types/BrowseVideo'
import browseVideoMutation from '../queries/browseVideoMutation'
import GoPurchaseButton from '../components/GoPurchaseButton'
import FrontLayout from '../components/FrontLayout'
import AdBox from '../components/AdBox'

interface Props {
  videoId: number;
}

interface CallWatchProps extends Props {
  watch: (params: object) => void;
}

const PlayerSection = styled(Box)`
  margin: 14px 0;
`;

const ButtonSection = styled(Box)`
  margin: 14px 0;
`;

const FloatLayer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, .5);
`

const NeedPayBlock = styled(Box)`
  position: relative;
`

class BrowseVideoMutation extends Mutation<BrowseVideo, BrowseVideoVariables> {}

class CallWatch extends React.Component<CallWatchProps> {
  componentDidMount() {
    this.props.watch({ variables: { videoId: this.props.videoId } })
  }

  render() {
    return this.props.children
  }
}

const Watch: NextFunctionComponent<Props> = ({ videoId }) => {
  const { width } = useWindowSize()

  if (!videoId) {
    return (
      <>
        <h3 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 800 }}>404</h3>
        <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 200 }}>The video you{"\'"}re looking for couldn{"\'"}t been found.</p>
      </>
    )
  }

  return (
    <FrontLayout>
      <AdBox page="watch" position="顶部" />

      <PlayerSection background="white" pad="medium">
        <BrowseVideoMutation mutation={browseVideoMutation}>
          {(update_videos, { loading, error, data }) => {
            if (error) {
              console.error(error)
              return (<div>Error!</div>)
            }

            return (
              <NoSsr>
                <CallWatch watch={update_videos} videoId={videoId} >
                  {
                    loading ? (
                      <Box style={{ margin: 'auto' }}>
                        <WaveLoading color="var(--brand)"/>
                      </Box>
                    ) : null
                  }
                  {
                    data ? data!.update_videos!.returning[0].price > 0 ? (
                      <NeedPayBlock style={{ height: width }}>
                        <Image fit="contain" src={data!.update_videos!.returning[0].thumb_url!}/>
                        <FloatLayer>
                          <Lock size="xlarge" color="white" />
                          <GoPurchaseButton
                            videoId={videoId}
                            amount={data!.update_videos!.returning[0].price}
                          />
                        </FloatLayer>
                      </NeedPayBlock>
                    ) : (
                      // @ts-ignore
                      <Video autoPlay={false} controls={"below"}>
                        {/* <CirclePlay size="xlarge" color="white" /> */}
                        <source key="video" src="//cnce1m.ef-cdn.com/_imgs/englishfirst/landing/mobilecourse18/video-1.mp4" type="video/mp4" />
                      </Video>
                    ) : null
                  }
                </CallWatch>
              </NoSsr>
            )
          }}
          </BrowseVideoMutation>
      </PlayerSection>

      <ButtonSection background="white" pad="medium">
        <Button
          primary
          label="返回"
          style={{ padding: "10px 24px", borderRadius: "8px" }}
          onClick={Router.back}
        />
      </ButtonSection>

      <AdBox page="watch" position="底部" />
    </FrontLayout>
  )
}

Watch.getInitialProps = ({ query }: NextContext) => {
  const videoId = query.videoId ? parseInt(query.videoId.toString()) : 0
  return { videoId }
}

export default Watch
