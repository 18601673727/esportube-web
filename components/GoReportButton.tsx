import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import { Box, Button } from 'grommet'

const ReportBox = styled(Box)`
  position: fixed;
  width: 100%;
  bottom: 0;
`

const buttonStyle = {
  padding: "10px 24px",
  borderRadius: "30px"
}

export default () => (
  <ReportBox background="white" pad="medium">
    <Button
      primary
      label="投诉"
      style={buttonStyle}
      onClick={() => {
        Router.push({
          pathname: '/report',
        })
      }}
    />
  </ReportBox>
)