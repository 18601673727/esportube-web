import arrayInsertRandom from 'array-insert-random'
import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Query } from 'react-apollo'
import { Image, Box } from 'grommet'
import { Group, CirclePlay } from 'grommet-icons'
import { WaveLoading } from 'styled-spinkit'
import { VideosByCategory, VideosByCategoryVariables } from '../queries/types/VideosByCategory'
import videosByCategoryQuery from '../queries/videosQuery'
import useIndexPageContext from '../contexts/indexPage'
import AdBox from './AdBox'
import FrontPaginator from './FrontPaginator'
import { DUMMY_IMAGE } from '../contants'

interface Props {
  onPaginationClick: (_: any) => void;
}

const FloatTitle = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  border-radius: 0 0 8px 8px;
  padding: 6px 8px;
  background: rgba(0, 0, 0, .5);
  color: var(--white);
  left: 12px;
  bottom: 12px;
  width: calc(100% - 24px);
  user-select: none;

  h3, h4 {
    font-size: 18px;
    display: flex;
    margin: 0;
  }
`
const VideoThumbnail = styled(Image)`
  user-select: none;
`
const VideoCirclePlay = styled(CirclePlay)`
  position: absolute;
  left: calc(50% - 48px);
  top: calc(50% - 56px);

  &:hover, &:active {
    cursor: pointer;
    fill: var(--brand);
    stroke: var(--brand);
  }
`;

const VideoGroup = styled(Group)`
  margin-right: 6px;
`;

const VideoList = styled(Box)`
  margin-top: 14px;
`;

const VideoListItem = styled(Box)`
  position: relative;
  margin: 6px 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

class VideosByCategoryQuery extends Query<VideosByCategory, VideosByCategoryVariables> {}

export default (props: Props) => {
  const { category, page } = useIndexPageContext()
  const { onPaginationClick } = props
  const limit = 2
  const offset = page * limit - limit

  return (
    <Box gridArea="main" background="light-2">
      <VideosByCategoryQuery
        query={videosByCategoryQuery}
        variables={{
          categoryId: category,
          offset,
          limit,
        }}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <Box style={{ margin: 'auto' }}>
                <WaveLoading color="var(--brand)"/>
              </Box>
            )
          }
          if (error) {
            console.error(error)
            return (<div>Error!</div>)
          }

          const middleList: Array<any> = []
          const middleAds = <AdBox page="index" position="中部"/>
          const middleData = data!.videos.map(video => (
            <Link href={`/watch/${video.id}`}>
              <VideoListItem
                fill="horizontal"
                height="small"
                background="white"
                pad="medium"
              >
                <VideoThumbnail fit="cover" src={video.thumbnail ? video.thumbnail.src : DUMMY_IMAGE}/>
                <VideoCirclePlay color="white" size="xlarge" />
                <FloatTitle>
                  <h3>{video.title}</h3>
                  <h4><VideoGroup color="accent-3"/>{video.viewer_count}人</h4>
                </FloatTitle>
              </VideoListItem>
            </Link>
          ))

          arrayInsertRandom(middleData, [middleAds])

          middleData.forEach((item, key) => {
            middleList.push({...item, key})
          })

          return (
            <VideoList>
              { middleList }

              <AdBox page="index" position="底部" style={{ marginTop: "7px" }} />

              <FrontPaginator
                total={data!.videos_aggregate!.aggregate!.count!}
                page={page}
                perPage={limit}
                categoryId={category}
                onChange={onPaginationClick}
              />
            </VideoList>
          )
        }}
      </VideosByCategoryQuery>
    </Box>
  )
}
