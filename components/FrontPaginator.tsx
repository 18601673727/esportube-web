import React from 'react'
import styled from 'styled-components'
import { Button, Box } from 'grommet'
import AdBox from './AdBox'

interface Props {
  total: number;
  page: number;
  perPage: number;
  categoryId: number;
  onChange: (route: object) => void;
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
  const { total, page, perPage, categoryId, onChange } = props

  return (
    <Wrapper background="white">
      <AdBox page="index" position="底部" />
      <ButtonBox page={page}>
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
      </ButtonBox>
    </Wrapper>
  )
}
