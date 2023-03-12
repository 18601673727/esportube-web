import gql from 'graphql-tag'

export default gql`
  query PlayVideo($videoId: Int!) {
    videos(where: { id: { _eq: $videoId } }) {
      source_url
    }
  }
`
