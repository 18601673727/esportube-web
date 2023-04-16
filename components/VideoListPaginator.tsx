"use client";

import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { Button, Box } from 'grommet'

interface Props {
  total: number;
  page: number;
  perPage: number;
  categoryId: number | null;
}

interface ButtonBoxProps {
  page: number;
}

const ButtonBox = styled(Box)`
  padding: 12px 0 88px;
  flex-direction: row;
  justify-content: ${(props: ButtonBoxProps) => props.page > 1 ? 'space-around' : 'center'};

  Button {
    padding: 6px 24px;
    border-radius: 8px;
    color: var(--status-critical);
    background: var(--light-2);
  }
`

const Wrapper = styled(Box)`
  margin-top: 7px;
`;

export default (props: Props) => {
  const router = useRouter()
  const { total, page, perPage, categoryId } = props

  return (
    <Wrapper background="white">
      <ButtonBox page={page}>
        {
          page > 1 ? (
            <Button
              plain
              label="上一页"
              onClick={() => router.push(categoryId ? `?categoryId=${categoryId}&page=${page - 1}` : `?page=${page - 1}`)}
            />
          ) : null
        }
        {
          Math.ceil(total / perPage) > page ? (
            <Button
              plain
              label="下一页"
              onClick={() => router.push(categoryId ? `?categoryId=${categoryId}&page=${page + 1}` : `?page=${page + 1}`)}
            />
          ) : null
        }
      </ButtonBox>
    </Wrapper>
  )
}
