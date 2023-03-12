import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import styled from 'styled-components'
import { NextFunctionComponent, NextContext } from 'next'
import { Grid } from 'grommet'
import FrontLayout from '../components/FrontLayout'
import Header from '../components/Header'
import VideoList from '../components/VideoList'
import GoReportButton from '../components/GoReportButton'
import useIndexPageContext from '../contexts/indexPage'

interface Props {
  categoryId: number;
  page: number;
}

const Wrapper = styled(Grid)`
  background: var(--light-2);
`;

const Index: NextFunctionComponent<Props> = ({ categoryId, page }) => {
  return (
    <FrontLayout>
      <Head>
        <title>首页</title>
      </Head>
      <useIndexPageContext.Provider
        initialCategory={categoryId}
        initialPage={page}
      >
        <Wrapper
          rows={['auto', 'auto']}
          columns={['100%']}
          areas={[
            { name: 'header', start: [0, 0], end: [0, 1] },
            { name: 'main', start: [0, 1], end: [0, 1] },
          ]}
        >
          <Header onClick={Router.push}/>
          <VideoList onPaginationClick={Router.push}/>
        </Wrapper>

        <GoReportButton/>
      </useIndexPageContext.Provider>
    </FrontLayout>
  )
}

Index.getInitialProps = ({ query }: NextContext) => {
  const categoryId = 'categoryId' in query ? parseInt(query.categoryId!.toString()) : 0
  const page = query.page ? parseInt(query.page.toString()) : 1
  return { categoryId, page }
}

export default Index