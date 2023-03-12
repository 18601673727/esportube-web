import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Router from 'next/router'
import useWindowSize from 'react-use/lib/useWindowSize'
import { NextFunctionComponent, NextContext } from 'next'
import { Button, Box } from 'grommet'
import { Query, Mutation } from 'react-apollo'
import FrontLayout from '../components/FrontLayout'
import AdBox from '../components/AdBox'
import PurchaseButton from '../components/PurchaseButton'
import GoReportButton from '../components/GoReportButton'
import videoQuery from '../queries/videoQuery'
import newOrderMutation from '../queries/newOrderMutation'
import { Video, VideoVariables } from '../queries/types/Video'
import { NewOrder, NewOrderVariables } from '../queries/types/NewOrder';

interface Props {
  videoId: number;
  type: string;
}

const ButtonSection = styled(Box)`
  margin: 14px 0;
`;

const PaymentTitle = styled.h3`
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
    background-color: var(--status-ok);
  }
`

class VideoQuery extends Query<Video, VideoVariables> {}
class NewOrderMutation extends Mutation<NewOrder, NewOrderVariables> {}

const Purchase: NextFunctionComponent<Props> = ({ videoId, type }) => {
  const { width } = useWindowSize()

  return (
    <FrontLayout>
      <VideoQuery query={videoQuery} variables={{ videoId }}>
        {({ loading, error, data }) => {
          if (loading) {
            return null
          }
          if (error) {
            console.error(error)
            return (<div>Error!</div>)
          }

          const singlePrice = data!.videos_by_pk!.price.toFixed(2)
          const monthyPrice = Number(data!.configs_by_pk!.value).toFixed(2)
          const amount = type === '单次' ? singlePrice : monthyPrice

          return type.length ? (
            <NewOrderMutation mutation={newOrderMutation}>
              {(insert_orders, { data: orderData, loading: orderLoading, error: orderError }) => {
                if (orderLoading) {
                  return <PaymentBox style={{ height: width }}><div className="qrcode">正在跳转...</div></PaymentBox>
                }
                if (orderError) {
                  console.error(error)
                  return (<div>Error!</div>)
                }
                if (orderData) {
                  Router.push(`/payment/make?sdorderno=${orderData!.insert_orders!.returning[0].id}&total_fee=${amount}`)
                  return null
                }

                return (
                  <>
                    <Head>
                      <title>{data!.videos_by_pk!.title}</title>
                    </Head>
                    <PaymentTitle>需您支付{amount}元</PaymentTitle>
                    <PaymentBox style={{ height: width }}>
                      <div className="qrcode">
                        <Button
                          plain
                          label="立即支付"
                          color="white"
                          onClick={() => insert_orders({ variables: { videoId, type, amount } })}
                        />
                      </div>
                    </PaymentBox>
                    <ButtonSection background="white" pad="medium">
                      <Button
                        primary
                        label="返回列表"
                        style={{ padding: "6px 24px", fontSize: '16px', borderRadius: "8px" }}
                        onClick={Router.back}
                      />
                    </ButtonSection>

                    <AdBox page="purchase" position="底部" />

                    <GoReportButton/>
                  </>
                )
              }}
            </NewOrderMutation>
          ) : (
            <>
              <Head>
                <title>支付页</title>
              </Head>
              <AdBox page="purchase" position="顶部" />

              <ButtonSection background="white" pad="medium">
                <PurchaseButton title="单次" onClick={() => Router.push({
                  pathname: '/purchase',
                  query: { videoId, type: '单次' },
                })}/>
                <PurchaseButton title="包月" onClick={() => Router.push({
                  pathname: '/purchase',
                  query: { videoId, type: '包月' },
                })}/>
                <Button
                  primary
                  label="返回列表"
                  style={{ padding: "6px 24px", fontSize: '16px', borderRadius: "8px" }}
                  onClick={Router.back}
                />
              </ButtonSection>

              <AdBox page="purchase" position="底部" />

              <GoReportButton/>
            </>
          )
        }}
      </VideoQuery>
    </FrontLayout>
  )
}

Purchase.getInitialProps = ({ query }: NextContext) => {
  const type = query.type ? query.type.toString() : ''
  const videoId = query.videoId ? parseInt(query.videoId.toString()) : 0
  return { videoId, type }
}

export default Purchase
