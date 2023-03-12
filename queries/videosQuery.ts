import gql from 'graphql-tag'

export default gql`
  query VideosByCategory($categoryId: Int!, $offset: Int!, $limit: Int!) {
    videos_aggregate(where: {category_id: {_eq: $categoryId}}) {
      aggregate {
        count
      }
    }
    videos(
      order_by: { id: asc },
      where: { category_id: { _eq: $categoryId } },
      offset: $offset,
      limit: $limit
    ) {
      id
      title
      price
      viewer_count
      thumbnail
    }
  }

`
