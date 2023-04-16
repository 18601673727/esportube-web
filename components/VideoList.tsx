"use client";

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import AdBox from '@/components/AdBox'
import VideoListHeader from '@/components/VideoListHeader'
import VideoListPaginator from '@/components/VideoListPaginator'
import { useSearchParams } from 'next/navigation'
import { Image, Box } from 'grommet'
import { Group } from 'grommet-icons'
import { ScaleLoader } from 'react-spinners'
import { useVideosQuery, Videos_Bool_Exp } from '@/queries/generated/graphql'
import { DUMMY_IMAGE } from '@/contants'

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

export default () => {
  const searchParams = useSearchParams()
  const categoryId = searchParams.has('categoryId') ?? isNaN(Number(searchParams.get('categoryId'))) ? null : Number(searchParams.get('categoryId'))
  const page = searchParams.has('page') ?? isNaN(Number(searchParams.get('page'))) ? 1 : Number(searchParams.get('page'))
  const limit = 9
  const offset = page * limit
  const filter: Videos_Bool_Exp = { category_id: {} };

  if (categoryId) {
    filter.category_id = { _eq: categoryId };
  }

  const { data, loading, error } = useVideosQuery({
    variables: { filter, offset, limit },
  })

  if (error) {
    console.error(error)
    return (<div>Error!</div>)
  }

  if (loading) {
    return (
      <Box style={{ margin: 'auto' }}>
        <ScaleLoader color="var(--brand)" />
      </Box>
    )
  }

  if (!data) {
    throw new Error("Connection okay but no `data` field?")
  }

  return (
    <Box gridArea="main" background="light-2">
      <VideoListHeader />
      {
        data.videos.map((video, key) => (
          <React.Fragment key={key}>
            <Link href={`/watch?id=${video.id}`}>
              <VideoListItem
                fill="horizontal"
                height="small"
                background="white"
                pad="medium"
              >
                <VideoThumbnail fit="cover" src={video.thumbnail ? video.thumbnail : DUMMY_IMAGE} />
                <FloatTitle>
                  <h3>{video.title}</h3>
                  <Group size="16px" color="accent-3" />
                  <h4>{video.view_count}人</h4>
                </FloatTitle>
              </VideoListItem>
            </Link>

            <AdBox page="index" position="中部" index={key + 1} />
          </React.Fragment>
        ))
      }

      {
        data.videos.length ? (
          <VideoListPaginator
            total={data.videos_aggregate!.aggregate!.count!}
            page={page}
            perPage={limit}
            categoryId={categoryId}
          />
        ) : null
      }

      <AdBox page="index" position="底部" />
    </Box>
  )
}
