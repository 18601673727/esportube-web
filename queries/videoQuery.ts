import gql from 'graphql-tag'
// http://video.xiangmin.net/watch?id=57?ono=095d71bc-5705-40f3-a848-47c9dc8c6157
export default gql`
  query Video($videoId: Int!) {
    videos_by_pk(id: $videoId) {
      id
      title
      price
    }
    configs_by_pk(id: 5) {
      value
    }
  }

`
