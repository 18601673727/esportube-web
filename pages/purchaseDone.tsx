import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'
import { NextFunctionComponent, NextContext } from 'next'
import { Button, Box } from 'grommet'
import { FormNextLink } from 'grommet-icons'
// import { Query } from 'react-apollo'
import FrontLayout from '../components/FrontLayout'
// import videoQuery from '../queries/videoQuery'
// import { Video, VideoVariables } from '../queries/types/Video'

interface Props {
  orderNumber: string;
}

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

// class VideoQuery extends Query<Video, VideoVariables> {}

const PurchaseDone: NextFunctionComponent<Props> = ({ orderNumber }) => {
  return (
    <FrontLayout>
      <>
        <Head>
          <title>支付页</title>
        </Head>
        <Wrapper>
          <section>
            <h3>恭喜，<br/>支付成功！</h3>
            <p>
              <Link href={`/watch?ono=${orderNumber}`}>
                <Button plain>请点击此处返回视频 <FormNextLink color="var(--dark-1)" /></Button>
              </Link>
            </p>
          </section>
        </Wrapper>
      </>
    </FrontLayout>
  )
}

PurchaseDone.getInitialProps = ({ query }: NextContext) => {
  const { sdorderno } = query
  return { orderNumber: sdorderno!.toString() }
}

export default PurchaseDone
