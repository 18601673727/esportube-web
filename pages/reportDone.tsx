import styled from 'styled-components'
import FrontLayout from '../components/FrontLayout'
import { SUCCESS_ARROW } from '../contants'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--white);
  flex-direction: column;
  padding: 27% 0 0;
  box-sizing: border-box;

  i {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 150px;
    background-image: url(${SUCCESS_ARROW});
    background-size: cover;
  }

  strong {
    display: block;
    padding: 48px 0 40px;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
  }

  p {
    display: block;
    color: var(--dark-2);
    margin: 0;
    padding: 0 42px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    box-sizing: border-box;
  }
`

export default () => (
  <FrontLayout>
    <Wrapper>
      <i className="wechat-success"/>
      <strong>投诉已提交</strong>
      <p>
        <span>微信团队会核实，并通过“微信团队”通知您审核结果，感谢您的支持。</span>
      </p>
    </Wrapper>
  </FrontLayout>
)