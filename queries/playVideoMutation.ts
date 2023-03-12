import gql from 'graphql-tag'

export default gql`
  mutation PlayVideo($neverUsed: Boolean!, $orderNumber: uuid) {
    update_orders(
      where: {
        _and: [
          {id: {_eq: $orderNumber}},
          {last_used_at: {_is_null: $neverUsed}}
        ]
      },
      _set: {
        last_used_at: "now()"
      }
    ) {
      returning {
        created_at
        last_used_at
        video {
          id
          source_url
        }
      }
    }
  }
`
