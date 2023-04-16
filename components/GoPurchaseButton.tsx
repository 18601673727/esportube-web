import React from 'react'
import styled from 'styled-components'
import { NextPage } from 'next'
import Router from 'next/navigation'

interface Props {
  videoId: string;
  amount: number;
}

const Wrapper = styled.button`
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
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  background: rgba(222, 222, 222, .2);

  :hover {
    background: rgba(222, 222, 222, .4);
  }
`

const GoPurchaseButton: NextPage<Props> = props => {
  const { videoId, amount } = props

  return (
    <Wrapper onClick={(event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation()

      Router.push({
        pathname: '/purchase',
        query: { videoId },
      })
    }}>
      观看本视频需支付{amount}元
    </Wrapper>
  )
}

export default GoPurchaseButton