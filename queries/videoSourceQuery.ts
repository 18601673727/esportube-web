import gql from 'graphql-tag'

export default gql`
  query VideoSource($videoId: Int!) {
    videos_by_pk(id: $videoId) {
      source_url
    }
  }

`
