import React from 'react'
import styled from 'styled-components'
import { Button, Box } from 'grommet'

interface Props {
  total: number;
  page: number;
  perPage: number;
  categoryId: number;
  onChange: (route: object) => void;
}

interface PaginationBoxProps {
  page: number;
}

const PaginationBox = styled(Box)`
  padding-bottom: 88px;
  flex-direction: row;
  justify-content: ${(props: PaginationBoxProps) => props.page > 1 ? 'space-around' : 'center'};

  Button {
    padding: 6px 24px;
    border-radius: 8px;
    color: var(--status-critical);
    background: var(--light-2);
  }
`;

export default (props: Props) => {
  const { total, page, perPage, categoryId, onChange } = props

  return (
    <PaginationBox background="white" pad="medium" page={page}>
      {
        page > 1 ? (
          <Button
            plain
            label="上一页"
            onClick={() => onChange({
              pathname: '/list',
              query: { categoryId, page: page - 1 }
            })}
          />
        ) : null
      }
      {
        Math.ceil(total / perPage) > page ? (
          <Button
            plain
            label="下一页"
            onClick={() => onChange({
              pathname: '/list',
              query: { categoryId, page: page + 1 }
            })}
          />
        ) : null
      }
    </PaginationBox>
  )
}