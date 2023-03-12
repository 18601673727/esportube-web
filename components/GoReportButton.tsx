import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import { Box, Button } from 'grommet'

const ReportBox = styled(Box)`
  position: fixed;
  width: 100%;
  bottom: 0;

  Button {
    padding: 6px 0;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 900;
  }
`

export default () => (
  <ReportBox background="white" pad="medium">
    <Button
      primary
      label="投诉"
      onClick={() => {
        Router.push({
          pathname: '/reportType',
        })
      }}
    />
  </ReportBox>
)