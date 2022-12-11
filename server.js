const express = require('express')
const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }))
app.use(express.static('dist'))

app.post('/api/goods/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '/src', '/data/goods.json'), 'utf-8'))

  res.send(data || [])
})

app.listen(PORT, () => {
  console.log(`Server has been started on http://localhost:${PORT}`)
})