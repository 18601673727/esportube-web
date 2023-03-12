import gql from 'graphql-tag'

export default gql`
  mutation BrowseVideo($videoId: Int!) {
    update_videos(where: {id: {_eq: $videoId}}, _inc: {viewer_count: 1}) {
      affected_rows
      returning {
        id
        title
        price
        thumbnail
        viewer_count
      }
    }
  }
`
