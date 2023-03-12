import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import styled from 'styled-components'
import NoSSR from 'react-no-ssr'
import { NextContext } from 'next'
import { Button, Box } from 'grommet'
import { FormNextLink } from 'grommet-icons'
import { WaveLoading } from 'styled-spinkit'
import { Mutation } from 'react-apollo'
import FrontLayout from '../components/FrontLayout'
import afterPayMutation from '../queries/afterPayMutation'
import { consumeOrder, consumeOrderVariables } from '../queries/types/consumeOrder'

interface Props {
  id: string | null;
  payno: string | null;
}

interface ConsumeTokenProps {
  id: string;
  kick: (params: object) => void;
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

class ConsumeToken extends React.Component<ConsumeTokenProps> {
  componentDidMount() {
    const { id, kick } = this.props
    kick({ variables: { id } })
  }

  render() {
    return null
  }
}

export default class PurchaseDone extends React.Component<Props> {
  static async getInitialProps({ query }: NextContext) {
    const { sdorderno, sdpayno } = query
    return {
      id: sdorderno ? sdorderno.toString() : null,
      payno: sdpayno ? sdpayno.toString() : null,
    }
  }

  goWatch(id: number, isBaoyue: boolean, token: string) {
    if (isBaoyue) {
      window.sessionStorage.setItem('esportube-m', token)
    } else {
      window.sessionStorage.setItem('esportube-s', token)
    }

    Router.replace(`/watch?id=${id}&goto=1`)
  }

  render() {
    const { id, payno } = this.props

    if (!id || !payno) {
      return null
    }

    let backButton: any = null

    setTimeout(() => {
      console.log('backButton been called')
      backButton ? backButton.click() : null
    }, 1000)

    return (
      <FrontLayout>
        <Head>
          <title>支付页</title>
        </Head>
        <NoSSR>
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
                return <ConsumeToken kick={update_orders} id={id} />
              }

              const order = data.update_orders!.returning[0]

              return (
                <Wrapper>
                  <section>
                    <h3>恭喜，<br/>支付成功！</h3>
                    <p>
                      <Button
                        plain
                        ref={(btn: any) => backButton = btn}
                        onClick={() => this.goWatch(
                          order.video!.id,
                          order.payment!.type === '包月',
                          order.payment!.type === '包月' ? 'e8125463314348b1a6a02a77ba63134b' : order.video!.source_url
                        )}
                      >
                        3秒内自动跳转，点击可立即播放 <FormNextLink color="var(--dark-1)" />
                      </Button>
                    </p>
                  </section>
                </Wrapper>
              )
            }}
          </AfterPayMutation>
        </NoSSR>
      </FrontLayout>
    )
  }
}
