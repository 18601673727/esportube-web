import gql from 'graphql-tag'

// payment: {
//   completed_at: {_is_null: false}, 
//   refuned_at: {_is_null: true}
// }

export default gql`
  mutation AfterPay($id: uuid!) {
    update_orders(
      where: {
        id: {_eq: $id},
      },
      _set: {last_played_at: "now()"}
    ) {
      returning {
        id
        created_at
        last_played_at
        is_sub
        video {
          id
          source_url
        }
        payment {
          id
        }
      }
    }
  }
`
