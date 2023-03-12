import styled from 'styled-components'
import Link from 'next/link'
import { WaveLoading } from 'styled-spinkit'
import { Box, Image } from 'grommet'
import { Query } from 'react-apollo'
import adsQuery from '../queries/adsQuery'
import { Ads, AdsVariables } from '../queries/types/Ads'

interface Props {
  position: string;
  page: string;
  style?: object;
}

const Wrapper = styled(Box)`
  min-height: 90px;
  max-height: 180px;
`;

const WhiteSpace = styled.div`
  background: #fff;
  min-height: 90px;
  max-height: 180px;
`

class AdsQuery extends Query<Ads, AdsVariables> {}

export default (props: Props) => {
  const { position, page, style } = props
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

        if (!data!.ads.length) {
          if (position === '中部') {
            return null
          }

          return (
            <Wrapper fill="horizontal" background="white" pad="medium" style={style}>
              <WhiteSpace/>
            </Wrapper>
          )
        }

        return (
          <Link href={data!.ads[0].link}>
            <a target="_blank">
              <Wrapper fill="horizontal" background="white" pad="medium" style={style}>
                <Image fit="cover" src={data!.ads[0].pic_url} />
              </Wrapper>
            </a>
          </Link>
        )
      }}
    </AdsQuery>
  )
}