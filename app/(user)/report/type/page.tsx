"use client";

import Link from 'next/link'
import styled from 'styled-components'
import ReportList from '@/components/ReportList'

const pageData = {
  title: '请选择投诉的原因：',
  list: [
    {
      content: '网页包含诈骗信息（如：假红包）',
    },
    {
      content: '网页包含色情信息',
    },
    {
      content: '网页包含暴力恐怖信息',
    },
    {
      content: '网页包含政治敏感信息',
    },
    {
      content: '网页在收集个人隐私信息（如：钓鱼链接）',
    },
    {
      content: '网页包含诱导分享/关注性质内容',
    },
    {
      content: '网页包含造谣信息',
    },
    {
      content: '网页包含赌博信息',
    },
  ]
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  p {
    margin: 0;
    padding: 14px 14px 10px;
    font-size: 14px;
    font-weight: 400;
  }
`

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 50px;

  a {
    color: var(--dark-3);
    font-size: 12px;
    text-decoration: none;
  }
`

export default () => {
  return (
    <Wrapper>
      <p>{pageData.title}</p>
      <ReportList data={pageData.list} />
      <Footer>
        <Link href="/report/info">
          投诉须知
        </Link>
      </Footer>
    </Wrapper>
  );
}