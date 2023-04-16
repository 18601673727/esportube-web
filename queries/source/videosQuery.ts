import gql from 'graphql-tag'

export default gql`
  query Videos($filter: videos_bool_exp!, $offset: Int!, $limit: Int!) {
    videos_aggregate(
      where: $filter
    ) {
      aggregate {
        count
      }
    }
    videos(
      where: $filter,
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
