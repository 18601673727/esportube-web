import gql from 'graphql-tag'

export default gql`
  mutation NewOrder($videoId: uuid!, $userId: uuid!, $isSub: Boolean!, $amount: money!) {
    insert_orders(
      objects: {
        payment: {
          data: {
            amount: $amount
          }
        },
        is_sub: $isSub,
        video_id: $videoId,
        user_id: $userId
      }
    ) {
      returning {
        id
      }
    }
  }
`
