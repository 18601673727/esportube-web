import gql from 'graphql-tag'

// TODO:
// Utillize Hasura Action to make sure our videos are controlled tokens to play

export default gql`
  query VideoSource($videoId: uuid!) {
    videos_by_pk(id: $videoId) {
      source_url
    }
  }

`
