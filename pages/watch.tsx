import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import styled from 'styled-components'
import useWindowSize from 'react-use/lib/useWindowSize'
import { NextContext, NextFunctionComponent } from 'next'
import { Button, Box, Video, Image } from 'grommet'
import { Lock } from 'grommet-icons'
import { WaveLoading } from 'styled-spinkit'
import { Mutation, Query } from 'react-apollo'
import GoPurchaseButton from '../components/GoPurchaseButton'
import GoReportButton from '../components/GoReportButton'
import FrontLayout from '../components/FrontLayout'
import AdBox from '../components/AdBox'
import browseVideoMutation from '../queries/browseVideoMutation'
import playVideoQuery from '../queries/playVideoQuery'
import { BrowseVideo, BrowseVideoVariables } from '../queries/types/BrowseVideo'
import { PlayVideo, PlayVideoVariables } from '../queries/types/PlayVideo'
import { DUMMY_IMAGE } from '../contants'

interface Props {
  videoId: number;
  orderNumber: string;
}

interface CallWatchProps {
  videoId: number;
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
class PlayVideoQuery extends Query<PlayVideo, PlayVideoVariables> {}

class CallWatch extends React.Component<CallWatchProps> {
  componentDidMount() {
    this.props.watch({ variables: { videoId: this.props.videoId } })
  }

  render() {
    return this.props.children
  }
}

const Watch: NextFunctionComponent<Props> = ({ videoId, orderNumber }) => {
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
                      <Image fit="contain" src={data!.update_videos!.returning[0].thumbnail ? data!.update_videos!.returning[0].thumbnail.src! : DUMMY_IMAGE}/>
                      <FloatLayer>
                        <Lock size="xlarge" color="white" />
                        <h3>{orderNumber}</h3>
                        <GoPurchaseButton
                          videoId={videoId}
                          amount={data!.update_videos!.returning[0].price}
                        />
                      </FloatLayer>
                    </NeedPayBlock>
                  ) : (
                    <>
                      <Head>
                        <title>{data!.update_videos!.returning[0].title}</title>
                      </Head>
                      <PlayVideoQuery query={playVideoQuery} variables={{ videoId }}>
                        {({ loading: playerLoading, error: playerError, data: playerData }) => {
                          if (playerLoading) {
                            return null
                          }
                          if (playerError) {
                            console.error(playerError)
                            return (<div>Player Error!</div>)
                          }

                          return (
                            // @ts-ignore
                            <Video autoPlay={false} controls={"below"}>
                              {/* <CirclePlay size="xlarge" color="white" /> */}
                              <source key="video" src={playerData!.videos[0].source_url!} type="video/mp4" />
                            </Video>
                          )
                        }}
                      </PlayVideoQuery>
                    </>
                  ) : null
                }
              </CallWatch>
            )
          }}
          </BrowseVideoMutation>
      </PlayerSection>

      <ButtonSection background="white" pad="medium">
        <Button
          primary
          label="返回"
          style={{ padding: "6px 24px", fontSize: '16px', borderRadius: "8px" }}
          onClick={Router.back}
        />
      </ButtonSection>

      <AdBox page="watch" position="底部" />

      <GoReportButton/>
    </FrontLayout>
  )
}

Watch.getInitialProps = ({ query }: NextContext) => {
  const videoId = query.id ? parseInt(query.id.toString()) : 0
  const orderNumber = query.ono ? query.ono.toString() : ''
  return { videoId, orderNumber }
}

export default Watch
