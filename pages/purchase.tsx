import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import useWindowSize from 'react-use/lib/useWindowSize'
import NoSsr from '@material-ui/core/NoSsr'
import { NextFunctionComponent, NextContext } from 'next'
import { Button, Box } from 'grommet'
import FrontLayout from '../components/FrontLayout'
import AdBox from '../components/AdBox'
import PurchaseButton from '../components/PurchaseButton'

interface Props {
  videoId: number;
  type: string;
  amount: number;
}

const ButtonSection = styled(Box)`
  margin: 14px 0;
`;

const H3 = styled.h3`
  display: block;
  margin: 0 auto;
  padding: 30px 0 15px;
  text-align: center;
  font-weight: 400;
`

const PaymentBox = styled(Box)`
  padding: 14px;

  .qrcode {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #aaa;
  }
`

const Purchase: NextFunctionComponent<Props> = ({ videoId, amount, type }) => {
  const { width } = useWindowSize()
  return (
    <FrontLayout>
      {
        type.length ? (
          <NoSsr>
            <H3>需您支付{amount}元</H3>
            <PaymentBox style={{ height: width }}>
              <div className="qrcode">
                <strong>支付相关</strong>
              </div>
            </PaymentBox>
            <ButtonSection background="white" pad="medium">
              <Button
                primary
                label="返回列表"
                style={{ padding: "10px 24px", borderRadius: "8px" }}
                onClick={Router.back}
              />
            </ButtonSection>

            <AdBox page="purchase" position="底部" />
          </NoSsr>
        ) : (
          <>
            <AdBox page="purchase" position="顶部" />

            <ButtonSection background="white" pad="medium">
              <PurchaseButton title="单次" onClick={() => Router.push({
                pathname: '/purchase',
                query: { videoId, amount, type: '单次' },
              })}/>
              <PurchaseButton title="包月" onClick={() => Router.push({
                pathname: '/purchase',
                query: { videoId, amount, type: '包月' },
              })}/>
              <Button
                primary
                label="返回列表"
                style={{ padding: "10px 24px", borderRadius: "8px" }}
                onClick={Router.back}
              />
            </ButtonSection>

            <AdBox page="purchase" position="底部" />
          </>
        )
      }
    </FrontLayout>
  )
}

Purchase.getInitialProps = ({ query }: NextContext) => {
  const type = query.type ? query.type.toString() : ''
  const amount = query.amount ? parseFloat(query.amount.toString()) : 0.00
  const videoId = query.videoId ? parseInt(query.videoId.toString()) : 0
  return { videoId, type, amount }
}

export default Purchase
