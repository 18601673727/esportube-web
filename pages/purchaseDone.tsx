import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Router from 'next/router'
import { NextFunctionComponent, NextContext } from 'next'
import { Button, Box } from 'grommet'
import { FormNextLink } from 'grommet-icons'
import { WaveLoading } from 'styled-spinkit'
import { useSession } from  'react-use-session'
import { Mutation } from 'react-apollo'
import FrontLayout from '../components/FrontLayout'
import afterPayMutation from '../queries/afterPayMutation'
import { consumeOrder, consumeOrderVariables } from '../queries/types/consumeOrder'

interface Props {
  id: string | null;
  payno: string | null;
}

class AfterPayMutation extends Mutation<consumeOrder, consumeOrderVariables> {}

const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;

  section {
    flex: 0 1 80%;
    margin: 60px auto auto;
    padding: 30px 30px 150px;
    border-radius: 8px;
    border: 2px solid var(--status-ok);
    background-color: var(--focus);
    letter-spacing: -2px;
  }

  h3 {
    color: var(--black);
    display: block;
    margin: 0 auto;
    padding: 0 0 35px;
    font-size: 42px;
    line-height: 40px;
    font-weight: 900;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  button {
    border-bottom: 1px dotted var(--dark-1);
  }

  svg {
    margin-bottom: 4px;
  }
`

const PurchaseDone: NextFunctionComponent<Props> = ({ id, payno }) => {
  if (!id || !payno) {
    return null
  }

  let backButton: any = null

  setTimeout(() => {
    backButton ? backButton.click() : null
  }, 4000)

  return (
    <FrontLayout>
      <Head>
        <title>支付页</title>
      </Head>
      <AfterPayMutation mutation={afterPayMutation}>
        {(update_orders, { loading, error, data }) => {
          if (error) {
            console.error(error)
            return (<div>Error!</div>)
          }
          if (loading) {
            return (
              <Box style={{ margin: 'auto' }}>
                <WaveLoading color="var(--brand)"/>
              </Box>
            )
          }
          if (!data) {
            update_orders({variables: { id }})
          } else {
            const order = data.update_orders!.returning[0]

            if (order.payment!.type === '包月') {
              const { save } = useSession('esportube-m', false)
              save('e8125463314348b1a6a02a77ba63134b')
            } else {
              const { save } = useSession('esportube-s', false)
              save(order.video!.source_url)
            }

            return (
              <Wrapper>
                <section>
                  <h3>恭喜，<br/>支付成功！</h3>
                  <p>
                    <Button
                      plain
                      ref={(btn: any) => backButton = btn}
                      onClick={() => Router.replace(`/watch?id=${order.video!.id}`)}
                    >
                      3秒后自动跳转，或立即点击返回 <FormNextLink color="var(--dark-1)" />
                    </Button>
                  </p>
                </section>
              </Wrapper>
            )
          }
        }}
      </AfterPayMutation>
    </FrontLayout>
  )
}

PurchaseDone.getInitialProps = ({ query }: NextContext) => {
  const { sdorderno, sdpayno } = query
  return {
    id: sdorderno ? sdorderno.toString() : null,
    payno: sdpayno ? sdpayno.toString() : null,
  }
}

export default PurchaseDone
