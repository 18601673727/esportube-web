import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import useWindowSize from 'react-use/lib/useWindowSize'
import { Box, Video, Image } from 'grommet'
import { Lock } from 'grommet-icons'
import GoPurchaseButton from '@/components/GoPurchaseButton'
import { DUMMY_IMAGE } from '@/contants'

interface Props {
  id: string;
  title: string;
  single_play_cost: number;
  source: string | null;
  thumbnail: any | null;
}

const Wrapper = styled(Box)`
`

const NeedPayBlock = styled(Box)`
  position: relative;

  .float-layer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, .5);
  }
`

export default (props: Props) => {
  const { id, title, single_play_cost, thumbnail, source } = props
  const { width } = useWindowSize()

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
      </Head>
      {
        // Note:
        // We always have video source in DB,
        // but If there's no source passed in,
        // then treat like unpaid ones.
        source ? (
          // @ts-ignore
          <Video autoPlay={false} controls={"below"}>
            <source key="video" src={source} type="video/mp4" />
          </Video>
        ) : (
          <NeedPayBlock style={{ height: width }}>
            <Image fit="contain" src={thumbnail ? thumbnail.src : DUMMY_IMAGE} />
            <div className="float-layer">
              <Lock size="xlarge" color="white" />
              <GoPurchaseButton
                videoId={id}
                amount={single_play_cost}
              />
            </div>
          </NeedPayBlock>
        )
      }
    </Wrapper>
  )
}
