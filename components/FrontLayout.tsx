import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { createGlobalStyle } from 'styled-components'
import { Grommet } from 'grommet'

interface Props {
  children?: React.ReactNode
}

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  const uri = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
  const secret = process.env.NEXT_PUBLIC_AUTH_TOKEN;

  if (!uri || !secret) {
    throw new Error('Graphql Client does not being properly setup!');
  }

  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri,
        headers: { 'x-hasura-admin-secret': secret },
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
}

const theme = {}

const GlobalStyle = createGlobalStyle`
  ${require('sanitize.css')}

  ::-webkit-scrollbar {
    display: none;
  }

  html, body, #__next, #__next > div {
    width: 100%;
    height: 100%;
  }

  body {
    background: #F2F2F2;
  }

  img {
    border-radius: 8px;
  }
`

export default ({ children }: Props) => (
  <ApolloProvider client={getClient()}>
    <GlobalStyle />
    <Grommet cssVars theme={theme}>
      {children}
    </Grommet>
  </ApolloProvider>
)
