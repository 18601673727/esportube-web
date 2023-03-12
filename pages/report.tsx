import Link from 'next/link'
import styled from 'styled-components'
import FrontLayout from '../components/FrontLayout'
import ReportList from '../components/ReportList'

const pageData = {
  title: '你可以：',
  list: [
    {
      content: '提交给微信团队审核',
    }
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
    <FrontLayout>
      <Wrapper>
        <p>{pageData.title}</p>
        <ReportList data={pageData.list} />
        <Footer>
          <Link href="/reportInfo">
            <a>投诉须知</a>
          </Link>
        </Footer>
      </Wrapper>
    </FrontLayout>
  );
}