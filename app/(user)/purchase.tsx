import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Router from 'next/navigation'
import { NextPage, NextPageContext } from 'next'
import { Button, Box } from 'grommet'
import AdBox from '@/components/AdBox'
import PurchaseButton from '@/components/PurchaseButton'
import GoReportButton from '@/components/GoReportButton'
// import videoQuery from '@/queries/videoQuery'
// import newOrderMutation from '@/queries/newOrderMutation'
// import { Video, VideoVariables } from '@/queries/types/Video'
// import { NewOrder, NewOrderVariables } from '@/queries/types/NewOrder'

interface Props {
  videoId: string;
  isSub: boolean;
}

const ButtonSection = styled(Box)`
  margin: 14px 0;
`;

const PaymentTitle = styled.h3`
  display: block;
  margin: 0 auto;
  padding: 15px 0 75px;
  text-align: center;
  font-weight: 400;
`

const PaymentBox = styled(Box)`
  padding: 14px 14px 4px;
  background: #fff;

  Button {
    color: #fff;
    padding: 13px 0;
    margin-bottom: 10px;
    font-size: 16px;
    border-radius: 8px;
    background-color: var(--status-ok);
  }
`

class VideoQuery extends Query<Video, VideoVariables> { }
class NewOrderMutation extends Mutation<NewOrder, NewOrderVariables> { }

const Purchase: NextPage<Props> = ({ videoId, isSub }) => {
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
          const subPrice = Number(data!.configs_by_pk!.value).toFixed(2)
          const amount = isSub ? subPrice : singlePrice

          return type.length ? (
            <NewOrderMutation mutation={newOrderMutation}>
              {(insert_orders, { data: orderData, loading: orderLoading, error: orderError }) => {
                if (orderLoading) {
                  return null
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
                    <PaymentBox>
                      <Button
                        fill
                        label="微信扫码支付"
                        color="status-ok"
                        onClick={() => insert_orders({ variables: { videoId, isSub, amount } })}
                      />
                      <Button
                        fill
                        disabled
                        label="敬请开放"
                        color="status-ok"
                      />
                      <Button
                        fill
                        disabled
                        label="敬请开放"
                        color="status-ok"
                      />
                      <Button
                        fill
                        disabled
                        label="敬请开放"
                        color="status-ok"
                      />
                    </PaymentBox>
                    <ButtonSection background="white" pad="medium">
                      <Button
                        reverse
                        label="返回"
                        style={{ padding: "6px 24px", fontSize: '16px', borderRadius: "8px" }}
                        onClick={Router.back}
                      />
                    </ButtonSection>

                    <AdBox page="purchase" position="底部" />

                    <GoReportButton />
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
                  query: { videoId, isSub: false },
                })} />
                <PurchaseButton title="包月" onClick={() => Router.push({
                  pathname: '/purchase',
                  query: { videoId, isSub: true },
                })} />
                <Button
                  reverse
                  label="返回"
                  style={{ padding: "6px 24px", fontSize: '16px', borderRadius: "8px" }}
                  onClick={Router.back}
                />
              </ButtonSection>

              <AdBox page="purchase" position="底部" />

              <GoReportButton />
            </>
          )
        }}
      </VideoQuery>
    </FrontLayout>
  )
}

Purchase.getInitialProps = ({ query }: NextPageContext) => {
  const isSub = query.isSub ? query.isSub : false
  const videoId = query.videoId ? query.videoId : ''
  return { videoId, isSub }
}

export default Purchase
