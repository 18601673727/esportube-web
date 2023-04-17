import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

type Props = {
  videoId: string;
  single_play_cost: string;
}

const Wrapper = styled.div`
  outline: none;
  user-select: none;
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 6px 24px;
  border: none;
  border-radius: 0;
  width: 100%;
  text-align: center;
  background: rgba(222, 222, 222, .2);
  
  :hover {
    background: rgba(222, 222, 222, .4);
  }
  
  a {
    color: #fff;    
    font-size: 16px;
    font-weight: 800;
    text-decoration: none;  
  }
`

const GoPurchaseButton = ({ videoId, single_play_cost }: Props) => (
  <Wrapper>
    <Link href={`/purchase?videoId=${videoId}`}>
      观看本视频需支付{single_play_cost}元
    </Link>
  </Wrapper>
)

export default GoPurchaseButton