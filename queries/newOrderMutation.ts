import gql from 'graphql-tag'

export default gql`
  mutation NewOrder($videoId: Int!, $type: String!, $amount: numeric!) {
    insert_orders(
      objects: {
        payment: {
          data: {
            type: $type,
            amount: $amount
          }
        },
        video_id: $videoId
      }
    ) {
      returning {
        id
      }
    }
  }
`
