import styled from 'styled-components'
import Link from 'next/link'
import { ScaleLoader } from 'react-spinners'
import { Box, Image } from 'grommet'
import { useAdsQuery, Ads } from '@/queries/generated/graphql'
import { DUMMY_AD } from '@/contants';

interface Props {
  position: string;
  page: string;
  index?: number;
}

const Wrapper = styled(Box)`
  min-height: 50px;
  max-height: 100px;
`;

const renderAd = (ad: Ads) => {
  const body = (
    <Wrapper fill="horizontal" background="white" pad="medium">
      <Image fit="cover" src={ad.thumbnail.length ? ad.thumbnail : DUMMY_AD} />
    </Wrapper>
  );

  return ad.link ? (
    <Link href={ad.link} target="_blank">
      {body}
    </Link>
  ) : body
}

export default (props: Props) => {
  const { position, page } = props

  const { data, loading, error } = useAdsQuery({
    variables: { position, page },
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

  if (!data.ads.length) {
    return null
  }

  return position === '中部' ? props.index! / 3 % 1 !== 0 ? null : renderAd(data.ads[props.index! / 3 - 1]) : renderAd(data.ads[0])
}