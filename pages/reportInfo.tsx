import FrontLayout from '../components/FrontLayout'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;

  strong {
    padding: 36px 0 20px;
    display: block;
    font-size: 26px;
    font-weight: 400;
    text-align: center;
  }

  p {
    color: var(--dark-2);
    margin: 0;
    padding: 0 36px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    box-sizing: border-box;
  }
`

export default () => (
  <FrontLayout>
    <Wrapper>
      <strong>投诉须知</strong>
      <p>
        <span>你应保证你的投诉行为出于善意，并代表你本人的真是意思，作为中立的平台服务者，收到你的投诉后，会尽快按照相关法律法规的规定独立判断并进行处理，我们将采取合理的措施包补您的个人信息，除法律法规规定的情形外，未经用户许可我们不会像第三方公开、透漏您的您的个人信息。</span>
      </p>
    </Wrapper>
  </FrontLayout>
)