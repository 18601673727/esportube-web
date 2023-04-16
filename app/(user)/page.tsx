"use client";

import VideoList from '@/components/VideoList'
import { Grid } from 'grommet'

const Home = () => (
  <Grid
    rows={['auto', 'auto']}
    columns={['100%']}
    areas={[
      { name: 'header', start: [0, 0], end: [0, 1] },
      { name: 'main', start: [0, 1], end: [0, 1] },
    ]}
  >
    <VideoList />
  </Grid>
);

export default Home;