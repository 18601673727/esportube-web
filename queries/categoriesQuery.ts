import gql from 'graphql-tag'

export default gql`
  query Categories {
    categories(order_by: {id: asc}) {
      id
      name
      chinese_name
    }
  }
`
