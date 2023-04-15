import gql from 'graphql-tag'
// http://localhost:3000/watch?id=095d71bc-5705-40f3-a848-47c9dc8c6157
export default gql`
  query Video($videoId: uuid!) {
    videos_by_pk(id: $videoId) {
      id
      title
      single_play_cost
      thumbnail
      total_playback_count
    }
  }

`
