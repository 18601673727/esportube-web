import gql from 'graphql-tag'

// TODO: 
// utilize Hasura Action to make sure this feature works properly

export default gql`
  mutation PlayVideo($userId: uuid, $videoId: uuid) {
    update_orders(
      where: {
        is_sub: {_eq: false}, 
        available_playback_count: {_gt: 1},
        user_id: {_eq: $userId},
        video_id: {_eq: $videoId},
        _or: {
          is_sub: {_eq: true},
          user_id: {_eq: $userId}
        }
      },
      _set: {
        last_played_at: "now()"
      },
      _inc: {
        available_playback_count: -1
      }
    ) {
      returning {
        video {
          source_url
        }
      }
    }
  }
`
