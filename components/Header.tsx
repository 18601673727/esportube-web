import React from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import { Button, Box } from 'grommet'
import { WaveLoading } from 'styled-spinkit'
import { Categories } from '../queries/types/Categories'
import categoriesQuery from '../queries/categoriesQuery'
import useIndexPageContext from '../contexts/indexPage'
import AdBox from './AdBox'

interface Props {
  onClick: (route: object) => void;
}

const CategoryBar = styled(Box)`
  flex-direction: row;
  overflow-x: auto;
  padding: 12px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled(Button)`
  white-space: pre;
  margin: 0 6px;
  font-size: 14px;
  font-weight: 900;
  padding: 0px 22px;
  line-height: 32px;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

class CategoriesQuery extends Query<Categories> {}

export default (props: Props) => {
  const { category } = useIndexPageContext()
  const { onClick } = props
  return (
    <Box gridArea="header" background="white">
      <CategoriesQuery query={categoriesQuery}>
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

          const categories = [{
            id: 0,
            name: 'all',
            chinese_name: '全部',
          }, ...data!.categories]

          return (
            <>
              <CategoryBar>
                {
                  categories.map((item, _key) => (
                    <CategoryButton
                      primary={item.id === category}
                      key={_key}
                      label={item.chinese_name}
                      onClick={() => onClick({
                        pathname: '/list',
                        query: { categoryId: item.id, page: 1 }
                      })}
                    />
                  ))
                }
              </CategoryBar>
              <AdBox page="index" position="顶部" />
            </>
          )
        }}
      </CategoriesQuery>
    </Box>
  )
}
