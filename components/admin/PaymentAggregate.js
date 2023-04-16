import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

class PaymentAggregate extends Component {
  render() {
    // const { listData } = this.props

    return (
      <Grid container justify="center" style={{ marginTop: 20 }}>
        <Grid item>
          <Paper style={{ padding: 20 }}>当前阶段总收入：</Paper>
        </Grid>
        <Grid item>
          {/* <Paper style={{ padding: '20px 120px' }}>{listData.reduce((prev, curr) => prev + curr.amount, 0.00).toFixed(2)}</Paper> */}
        </Grid>
      </Grid>
    )
  }
}

// const mapStateToProps = (state) => {
//   const { fetchedAt, ...listData } = state.admin.resources.payments.data

//   if (Object.keys(listData).length) {
//     return ({
//       listData: Object.keys(listData).map(key => listData[key])
//     })
//   }

//   return ({
//     listData: []
//   })
// }

export default PaymentAggregate;