"use client";

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
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
  <Link href='/report/type'>
    <ReportBox background="white" pad="medium">
      <Button
        primary
        label="微信登录"
      />
    </ReportBox>
  </Link>
)