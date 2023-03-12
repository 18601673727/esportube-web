import Link from 'next/link'
import styled from 'styled-components'
import { Next } from 'grommet-icons'

interface IReportItem {
  content: string;
}

interface Props {
  data: IReportItem[];
}

const Wrapper = styled.div`
  ul, li {
    margin: 0;
    padding: 0;
  }

  li {
    user-select: none;
    cursor: pointer;
    display: flex;
    background: var(--white);
    padding: 10px 10px;
    border-bottom: 1px solid var(--light-3);

    :last-child {
      border-bottom: none;
    }
  }

  strong {
    flex: 1;
    color: #444;
    font-size: 16px;
    font-weight: 400;
  }

  svg {
    stroke: #111;
  }
`

export default (props: Props) => (
  <Wrapper>
    <ul>
      {
        props.data!.map((item, _key) => (
          <Link href={props.data.length > 1 ? '/report' : '/reportDone'} key={_key}>
            <li>
              <strong>{item.content}</strong>
              <Next color="#B7B7B7" size="18px" style={{ marginTop: 3 }}/>
            </li>
          </Link>
        ))
      }
    </ul>
  </Wrapper>
)