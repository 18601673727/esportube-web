import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { Group, FormClose } from 'grommet-icons'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

import {
  Grommet,
  Image,
  Grid,
  Button,
  Box,
  Heading,
  Video,
  Form,
  FormField,
  Select,
  CheckBox,
  Text,
  Layer,
  ResponsiveContext,
} from 'grommet'

const Wrapper = styled(Grid)`
  background: var(--light-2);
`;

const CategoryBar = styled(Box)`
  flex-direction: row;
  overflow-x: auto;
  padding: 12px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled(Button)`
  white-space: pre;
  margin-left: 6px;
  margin-right: 6px;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

const VideoList = styled(Box)`
  margin-top: 14px;
`;

const VideoListItem = styled(Box)`
  position: relative;
  margin: 6px 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const AdBox = styled(Box)`
  height: 180px;
`;

const PaginationBox = styled(Box)`
  flex-direction: row;
  justify-content: space-around;

  Button {
    padding: 6px 24px;
    border-radius: 8px;
    color: var(--status-critical);
    background: var(--light-2);
  }
`;

const FloatTitle = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  border-radius: 0 0 8px 8px;
  padding: 6px 8px;
  background: rgba(0, 0, 0, .5);
  color: var(--white);
  left: 12px;
  bottom: 12px;
  width: calc(100% - 40px);

  h3, h4 {
    font-size: 18px;
    display: flex;
    margin: 0;
  }

  svg {
    margin-right: 6px;
  }
`

// const MySwal = withReactContent(Swal)


const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    background: #F2F2F2;
  }

  img {
    border-radius: 8px;
  }
`

const theme = {}

export default () => {
  return (
    <React.Fragment>
      <GlobalStyle />

      <Grommet theme={theme} cssVars={true}>
        <Wrapper
          rows={['240px', 'calc(100% - 240px)']}
          columns={['100%']}
          areas={[
            { name: 'header', start: [0, 0], end: [0, 1] },
            { name: 'main', start: [0, 1], end: [0, 1] },
          ]}
        >
          <Box gridArea="header" background="white">
            <CategoryBar>
              <CategoryButton
                label="hello world"
                primary
                onClick={() => alert('hello, world')}
              />
              <CategoryButton
                label="hello world"
                onClick={() => alert('hello, world')}
              />
              <CategoryButton
                label="hello world"
                onClick={() => alert('hello, world')}
              />
              <CategoryButton
                label="hello world"
                onClick={() => alert('hello, world')}
              />
              <CategoryButton
                label="hello world"
                onClick={() => alert('hello, world')}
              />
              <CategoryButton
                label="hello world"
                onClick={() => alert('hello, world')}
              />
              <CategoryButton
                label="hello world"
                onClick={() => alert('hello, world')}
              />
              <CategoryButton
                label="hello world"
                onClick={() => alert('hello, world')}
              />
              <CategoryButton
                label="hello world"
                onClick={() => alert('hello, world')}
              />
            </CategoryBar>

            <AdBox fill="horizontal" background="white" pad="medium">
              <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
            </AdBox>
          </Box>

          <Box gridArea="main" background="light-2">
            <VideoList>
              <VideoListItem fill="horizontal" height="small" background="white" pad="medium">
                <Image fit="cover" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561098754577&di=82d328d3f7ae4b85ffbbc9d4e8af32c9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201310%2F09%2F20131009120823_sFvay.jpeg" />
                <FloatTitle>
                  <h3>一个优质的视频标题1</h3>
                  <h4><Group color="accent-3"/>618人</h4>
                </FloatTitle>
              </VideoListItem>
              <VideoListItem fill="horizontal" height="small" background="white" pad="medium">
                <Image fit="cover" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561098754577&di=82d328d3f7ae4b85ffbbc9d4e8af32c9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201310%2F09%2F20131009120823_sFvay.jpeg" />
                <FloatTitle>
                  <h3>一个优质的视频标题1</h3>
                  <h4><Group color="accent-3"/>618人</h4>
                </FloatTitle>
              </VideoListItem>
              <VideoListItem fill="horizontal" height="small" background="white" pad="medium">
                <Image fit="cover" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561098754577&di=82d328d3f7ae4b85ffbbc9d4e8af32c9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201310%2F09%2F20131009120823_sFvay.jpeg" />
                <FloatTitle>
                  <h3>一个优质的视频标题1</h3>
                  <h4><Group color="accent-3"/>618人</h4>
                </FloatTitle>
              </VideoListItem>
              <VideoListItem fill="horizontal" height="small" background="white" pad="medium">
                <Image fit="cover" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561098754577&di=82d328d3f7ae4b85ffbbc9d4e8af32c9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201310%2F09%2F20131009120823_sFvay.jpeg" />
                <FloatTitle>
                  <h3>一个优质的视频标题1</h3>
                  <h4><Group color="accent-3"/>618人</h4>
                </FloatTitle>
              </VideoListItem>
              <VideoListItem fill="horizontal" height="small" background="white" pad="medium">
                <Image fit="cover" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561098754577&di=82d328d3f7ae4b85ffbbc9d4e8af32c9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201310%2F09%2F20131009120823_sFvay.jpeg" />
                <FloatTitle>
                  <h3>一个优质的视频标题1</h3>
                  <h4><Group color="accent-3"/>618人</h4>
                </FloatTitle>
              </VideoListItem>
              <VideoListItem fill="horizontal" height="small" background="white" pad="medium">
                <Image fit="cover" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561098754577&di=82d328d3f7ae4b85ffbbc9d4e8af32c9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201310%2F09%2F20131009120823_sFvay.jpeg" />
                <FloatTitle>
                  <h3>一个优质的视频标题1</h3>
                  <h4><Group color="accent-3"/>618人</h4>
                </FloatTitle>
              </VideoListItem>
            </VideoList>

            {/* <Video controls="below" fit="cover" autoPlay={false} >
              <source key="video" src="//cnce1m.ef-cdn.com/_imgs/englishfirst/landing/mobilecourse18/video-1.mp4" type="video/mp4" />
            </Video> */}

            <AdBox fill="horizontal" background="white" pad="medium" style={{ marginTop: "14px" }}>
              <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
            </AdBox>

            <PaginationBox background="white" pad="medium">
              <Button
                plain
                label="上一页"
                onClick={() => {}}
              />
              <Button
                plain
                label="下一页"
                onClick={() => {}}
              />
            </PaginationBox>


            <Box background="white" pad="medium">
              <Button
                primary
                label="投诉"
                style={{ padding: "10px 24px", borderRadius: "30px" }}
                onClick={() => {}}
              />
            </Box>
          </Box>
        </Wrapper>
      </Grommet>
    </React.Fragment>
  )
}
