const express = require('express')
const webpack = require('webpack')
// const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }))
app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`Server has been started on http://localhost:${PORT}`)
})