import styled from 'styled-components'
import FrontLayout from '@/components/FrontLayout'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--white);
  flex-direction: column;
  padding: 20% 0 0;
  box-sizing: border-box;

  strong {
    display: block;
    padding: 40px 0 20px;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
  }

  p {
    display: block;
    color: var(--dark-2);
    margin: 0;
    padding: 0 42px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    box-sizing: border-box;
  }
`

export default () => (
  <FrontLayout>
    <Wrapper>
      <strong>支付失败</strong>
      <p>
        <span>非常抱歉，请与管理员联系</span>
      </p>
    </Wrapper>
  </FrontLayout>
)