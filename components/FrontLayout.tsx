import 'isomorphic-fetch'
import React from 'react'
import ApolloClient from 'apollo-client'
import toaster from 'toasted-notes'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { createGlobalStyle } from 'styled-components'
import { Grommet } from 'grommet'
import { PUSH_NICENAMES } from '../contants'

const baseCSS = require('sanitize.css')
const toastCSS = require('toasted-notes/src/styles.css')

interface Props {
  children?: React.ReactNode
}

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://esportube.herokuapp.com/v1/graphql',
      headers: {'x-hasura-admin-secret': 'cb74937b1e6d11d58e0da6e84d0c304e'},
    }),
    cache: new InMemoryCache(),
  })
}

const client = createApolloClient()

const theme = {}

const GlobalStyle = createGlobalStyle`
  ${baseCSS}
  ${toastCSS}

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

const getRandomName = (min: number, max: number) => Math.round(Math.random() * (max - min + 1) + min)
const getRandomMoney = (min: number, max: number) => (Math.random() * (max - min) + min).toFixed(2)

export default ({ children }: Props) => {
  setInterval(() => {
    toaster.notify(
      `${PUSH_NICENAMES[getRandomName(0, PUSH_NICENAMES.length)]}***刚刚打赏了${getRandomMoney(2.00, 9.99)}元`,
      { duration: 2000 }
    )
  }, 3500)

  return (
    <ApolloProvider client={client}>
      <GlobalStyle/>
      <Grommet cssVars theme={theme}>
        {children}
      </Grommet>
    </ApolloProvider>
  )
}