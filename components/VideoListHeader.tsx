"use client";

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { Button, Box } from 'grommet'
import { useSearchParams } from 'next/navigation'
import { useCategoriesQuery } from '@/queries/generated/graphql'
import AdBox from './AdBox'

const CategoryBar = styled(Box)`
  flex-direction: row;
  overflow-x: auto;
  padding: 12px;

  ::-webkit-scrollbar {
    display: none;
  }

  & > a {
    margin: 0 4px;
  }
`;

const CategoryButton = styled(Button)`
  white-space: pre;
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
  const searchParams = useSearchParams()
  const categoryId = searchParams.has('categoryId') ? parseInt(searchParams.get('categoryId')!) : 0;
  const { data, loading, error } = useCategoriesQuery({})

  if (error) {
    console.error(error)
    return (<div>Error!</div>)
  }

  if (loading) {
    return null
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
            <Link key={key} href={`?categoryId=${item.id}&page=1`} replace scroll={false}>
              <CategoryButton primary={item.id === categoryId} label={item.chinese_name} />
            </Link>
          ))
        }
      </CategoryBar>
      <AdBox page="index" position="顶部" />
    </Box>
  )
}
