import styled from 'styled-components'
import { Image } from 'grommet'
import { DANCI_IMAGE, BAOYUE_IMAGE } from '../contants'

interface Props {
  title: '单次' | '包月';
  onClick: () => void;
}

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;

  img {
    width: 100%;
  }

  strong {
    user-select: none;
    position: absolute;
    left: 50px;
    top: calc(50% - 20px);
    font-size: 36px;
    font-weight: 400;
    color: #fff;
  }

  span {
    user-select: none;
    position: absolute;
    right: 40px;
    top: calc(50% - 24px);
    color: ${(props) => props.title === '单次' ? 'blue' : 'red'};
    font-size: 24px;
    padding: 7px 24px;
    background: #fff;
    border-radius: 18px;
  }
`;

export default (props: Props) => {
  return (
    <Wrapper title={props.title} onClick={props.onClick}>
      <Image src={props.title === '单次' ? DANCI_IMAGE : BAOYUE_IMAGE}/>
      <strong>{props.title}播放</strong>
      <span>购买</span>
    </Wrapper>
  )
}