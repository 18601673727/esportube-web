"use client";

import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useEffectOnce, useAsync } from 'react-use';
import { useRouter, useSearchParams } from 'next/navigation'
import { Button, Box } from 'grommet'
import { ScaleLoader } from 'react-spinners'
import { useVideoSourceQuery, useBrowseVideoMutation } from '@/queries/generated/graphql'
import AdBox from '@/components/AdBox'

type CurrentVideo = {
  __typename?: "videos" | undefined;
  id: any;
  title: string;
  thumbnail?: string | null | undefined;
  single_play_cost: any;
  total_playback_count: number;
  source_url?: string;
}

const Section = styled(Box)`
  .baoyue {
    color: var(--placeholder);
    margin: 10px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }
  .strong {
    color: var(--accent-4);
    border-bottom: 1px solid var(--accent-4);
    font-weight: 900;
  }
`;

const LoadingBox = () => (
  <Box style={{ margin: 'auto' }}>
    <ScaleLoader color="var(--brand)" />
  </Box>
)

const ErrorBox = (error: any) => {
  console.error(error)
  return (<div>Error!</div>)
}

const EmptyBox = () => (
  <>
    <h3 style={{ textAlign: 'center', marginTop: '50px', fontWeight: 800 }}>404</h3>
    <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 200 }}>The video you{"\'"}re looking for couldn{"\'"}t been found.</p>
  </>
)

const DynamicPlayer = dynamic(() => import('@/components/Player'), {
  loading: () => <LoadingBox />,
})

// TODO: base {last_used_at} baoyue => diffDays(created_at, last_used_at) < 30?
const Watch = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const goto = searchParams.get('goto')

  if (!id || !id.length) {
    return <EmptyBox />
  }

  const [subscribed, setSubscribed] = useState(true) // TODO: subscription logic
  const [ownToken, setOwnToken] = useState(false) // TODO: token logic
  let currentVideo: CurrentVideo = { id, title: '', single_play_cost: '', total_playback_count: 0 }

  // [browseVideoMutation, { data, loading, error }]
  const browseVideo = useBrowseVideoMutation({
    variables: { videoId: id },
  });

  // {  data: qData }
  const videoSource = useVideoSourceQuery({
    variables: { videoId: browseVideo[1].data?.update_videos?.returning[0].id },
    skip: browseVideo[1].loading || !browseVideo[1].data?.update_videos?.returning.length
  });

  useEffectOnce(() => {
    browseVideo[0]({ variables: { videoId: id } });
  })

  const error = browseVideo[1].error || videoSource.error;
  const loading = browseVideo[1].loading || videoSource.loading;

  if (error) {
    return <ErrorBox error={error} />
  }

  if (loading) {
    return <LoadingBox />
  }

  currentVideo = Object.assign(
    { source_url: videoSource.data?.videos_by_pk?.source_url },
    browseVideo[1].data?.update_videos?.returning[0],
  );

  return (
    <>
      <AdBox page="watch" position="顶部" />

      <Section background="white" pad="medium">
        <DynamicPlayer {...currentVideo} consumeToken={!subscribed && ownToken} />
      </Section>

      {
        subscribed ? (
          <Section background="white">
            <div className="baoyue">
              您正在使用<span className="strong">包月权益</span>免费观看
            </div>
          </Section>
        ) : null
      }

      <AdBox page="watch" position="底部" />

      <Section background="white" pad="medium">
        <Button
          reverse
          label="返回"
          style={{ padding: "6px 24px", fontSize: '16px', borderRadius: "8px" }}
          onClick={() => goto === '1' ? router.replace('/') : router.back()}
        />
      </Section>
    </>
  );
}

export default Watch
