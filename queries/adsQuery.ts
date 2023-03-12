import gql from 'graphql-tag'

export default gql`
  query Ads($position: String!, $page: String!) {
    ads(where: {position: {_eq: $position}, page: {_eq: $page}}) {
      id
      sort
      link
      page
      pic_url
      position
    }
  }
`
