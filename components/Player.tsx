import styled from 'styled-components'
import { Box, Video, Image } from 'grommet'
import { Lock } from 'grommet-icons'
import GoPurchaseButton from '@/components/GoPurchaseButton'
import { DUMMY_IMAGE } from '@/contants'

interface Props {
  id: string;
  title: string;
  single_play_cost: string;
  source_url?: string | null;
  thumbnail?: string | null;
  consumeToken: boolean;
}

const Wrapper = styled(Box)`
`

const NeedPayBlock = styled(Box)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;

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

const Player = ({ id, title, single_play_cost, thumbnail, source_url, consumeToken }: Props) => {
  console.log("TODO consumeToken: ", consumeToken)

  return (
    <Wrapper>
      <h3>{title}</h3>
      {
        // Note:
        // We always have video source in DB,
        // but If there's no source passed in,
        // then treat like unpaid ones.
        source_url ? (
          <Video autoPlay={false} controls={"below"}>
            <source key="video" src={source_url} type="video/mp4" />
          </Video>
        ) : (
          <NeedPayBlock>
            <Image fit="contain" src={thumbnail ? thumbnail : DUMMY_IMAGE} />
            <div className="float-layer">
              <Lock size="xlarge" color="white" />
              {
                single_play_cost && single_play_cost.length ? (
                  <GoPurchaseButton
                    videoId={id}
                    single_play_cost={single_play_cost}
                  />
                ) : null
              }
            </div>
          </NeedPayBlock>
        )
      }
    </Wrapper>
  )
}

export default Player