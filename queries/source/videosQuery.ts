import gql from 'graphql-tag'

export default gql`
  query Videos($categoryId: Int, $offset: Int!, $limit: Int!) {
    videos_aggregate(
      where: { category_id: { _eq: $categoryId } }
    ) {
      aggregate {
        count
      }
    }
    videos(
      where: { category_id: { _eq: $categoryId } },
      order_by: { id: desc },
      offset: $offset,
      limit: $limit
    ) {
      id
      title
      single_play_cost
      view_count
      thumbnail
    }
  }

`
