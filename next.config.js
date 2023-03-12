const withTypescript = require('@zeit/next-typescript')
const withProgressBar = require('next-progressbar')
const withCSS = require('@zeit/next-css')

module.exports = withProgressBar(
  withCSS(
    withTypescript({
      // target: 'serverless',
      progressBar: {
        profile: true,
      },
    })
  )
)
