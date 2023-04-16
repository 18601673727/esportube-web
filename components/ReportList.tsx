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
    display: flex;
    user-select: none;
    cursor: pointer;
    display: flex;
    background: var(--white);
    padding: 10px 10px;
    border-bottom: 1px solid var(--light-3);
    justify-content: space-between;

    :last-child {
      border-bottom: none;
    }

    a {
      -webkit-appearance: none;
      text-decoration: none;
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
        props.data!.map((item, key) => (
          <li key={key}>
            <Link href={props.data.length > 1 ? '/report' : '/report/done'}>{item.content}</Link>
            <Next color="#B7B7B7" size="18px" style={{ marginTop: 3 }} />
          </li>
        ))
      }
    </ul>
  </Wrapper>
)