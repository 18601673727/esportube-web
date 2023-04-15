import gql from 'graphql-tag'

export default gql`
  mutation BrowseVideo($videoId: uuid!) {
    update_videos(where: {id: {_eq: $videoId}}, _inc: {view_count: 1}) {
      affected_rows
      returning {
        id
        title
        thumbnail
        single_play_cost
        total_playback_count
      }
    }
  }
`
