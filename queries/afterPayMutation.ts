import gql from 'graphql-tag'

export default gql`
  mutation consumeOrder($id: uuid!) {
    update_orders(where: {id: {_eq: $id}}, _set: {last_used_at: "now()"}) {
      returning {
        id
        created_at
        last_used_at
        video {
          id
          source_url
        }
        payment {
          id
          type
        }
      }
    }
  }
`
