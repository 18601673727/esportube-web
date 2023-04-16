import Head from 'next/head'
import styled from 'styled-components'
import { NextPageContext } from 'next'
import { Grid } from 'grommet'
import FrontLayout from '../components/FrontLayout'
import Header from '../components/Header'
import VideoList from '../components/VideoList'
import GoReportButton from '../components/GoReportButton'

const Wrapper = styled(Grid)`
  background: var(--light-2);
`;

const Index = () => {
  return (
    <FrontLayout>
      <Head>
        <title>首页</title>
      </Head>
      <Wrapper
        rows={['auto', 'auto']}
        columns={['100%']}
        areas={[
          { name: 'header', start: [0, 0], end: [0, 1] },
          { name: 'main', start: [0, 1], end: [0, 1] },
        ]}
      >
        <Header />
        <VideoList />
      </Wrapper>

      <GoReportButton />
    </FrontLayout>
  )
}

Index.getInitialProps = ({ query }: NextPageContext) => {
  const categoryId = 'categoryId' in query ? parseInt(query.categoryId!.toString()) : 0
  const page = query.page ? parseInt(query.page.toString()) : 1
  return { categoryId, page }
}

export default Index