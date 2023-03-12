import styled from 'styled-components'
import Link from 'next/link'
import { WaveLoading } from 'styled-spinkit'
import { Box, Image } from 'grommet'
import { Query } from 'react-apollo'
import adsQuery from '../queries/adsQuery'
import { Ads, AdsVariables, Ads_ads } from '../queries/types/Ads'
import { DUMMY_AD } from '../contants';

interface Props {
  position: string;
  page: string;
  index?: number;
}

const Wrapper = styled(Box)`
  min-height: 50px;
  max-height: 100px;
`;

const WhiteSpace = styled.div`
  background: #fff;
  min-height: 50px;
  max-height: 100px;
`

class AdsQuery extends Query<Ads, AdsVariables> {}

const renderAd = (ad: Ads_ads) => {
  return (
    <Link href={ad.link}>
      <a target="_blank">
        <Wrapper fill="horizontal" background="white" pad="medium">
          <Image fit="cover" src={ad.thumbnail ? ad.thumbnail.src : DUMMY_AD} />
        </Wrapper>
      </a>
    </Link>
  )
}

export default (props: Props) => {
  const { position, page } = props
  return (
    <AdsQuery query={adsQuery} variables={{ position, page }}>
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

        if (position === '中部') {
          if (!data!.ads.length || props.index! / 3 % 1 !== 0) {
            return null
          }

          return renderAd(data!.ads[props.index! / 3 - 1])
        }

        if (!data!.ads.length) {
          return (
            <Wrapper fill="horizontal" background="white" pad="medium">
              <WhiteSpace/>
            </Wrapper>
          )
        }

        return renderAd(data!.ads[0])
      }}
    </AdsQuery>
  )
}