import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Query } from 'react-apollo'
import { Image, Box } from 'grommet'
import { Group } from 'grommet-icons'
import { WaveLoading } from 'styled-spinkit'
import useIndexPageContext from '../contexts/indexPage'
import AdBox from './AdBox'
import FrontPaginator from './FrontPaginator'
import videosQuery from '../queries/videosQuery'
import { Videos, VideosVariables } from '../queries/types/Videos'
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

  h3 {
    flex: 1;
  }

  h3, h4 {
    font-size: 14px;
    margin: 0;
  }

  svg {
    margin-top: 4px;
    margin-right: 6px;
  }
`
const VideoThumbnail = styled(Image)`
  user-select: none;
`

const VideoList = styled(Box)`
  margin-top: 14px;
`;

const VideoListItem = styled(Box)`
  position: relative;
  margin: 6px 0;

  &:hover, &:active {
    cursor: pointer;
  }

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

class VideosQuery extends Query<Videos, VideosVariables> {}

export default (props: Props) => {
  const { category, page } = useIndexPageContext()
  const { onPaginationClick } = props

  const limit = 9
  const offset = page * limit - limit

  return (
    <Box gridArea="main" background="light-2">
      <VideosQuery
        query={videosQuery}
        variables={{
          limit,
          offset,
          categoryId: category ? category : null
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

          return (
            <VideoList>
              {
                data!.videos.map((video, key) => {
                  return (
                    <React.Fragment key={key}>
                      <Link href={`/watch?id=${video.id}`}>
                        <VideoListItem
                          fill="horizontal"
                          height="small"
                          background="white"
                          pad="medium"
                        >
                          <VideoThumbnail fit="cover" src={video.thumbnail ? video.thumbnail.src : DUMMY_IMAGE}/>
                          <FloatTitle>
                            <h3>{video.title}</h3>
                            <Group size="16px" color="accent-3"/>
                            <h4>{video.viewer_count}人</h4>
                          </FloatTitle>
                        </VideoListItem>
                      </Link>

                      <AdBox page="index" position="中部" index={key + 1}/>
                    </React.Fragment>
                  )
                })
              }

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
      </VideosQuery>
    </Box>
  )
}
