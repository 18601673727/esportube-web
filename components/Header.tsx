import React from 'react'
import styled from 'styled-components'
import { Button, Box } from 'grommet'
import { ScaleLoader } from 'react-spinners'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCategoriesQuery } from '../queries/generated/graphql'
import AdBox from './AdBox'

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

export default () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryId = searchParams.has('categoryId') ?? isNaN(Number(searchParams.get('categoryId'))) ? null : Number(searchParams.get('categoryId'))
  const { data, loading, error } = useCategoriesQuery({})

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

  const categories = [{
    id: 0,
    name: 'all',
    chinese_name: '全部',
  }, ...data.categories]

  return (
    <Box gridArea="header" background="white">
      <CategoryBar>
        {
          categories.map((item, key) => (
            <CategoryButton
              primary={item.id === categoryId}
              key={key}
              label={item.chinese_name}
              onClick={() => router.push(`?categoryId=${item.id}&page=1`)}
            />
          ))
        }
      </CategoryBar>
      <AdBox page="index" position="顶部" />
    </Box>
  )
}
