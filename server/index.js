const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const resources = require('./api')
const Resource = require('resourcejs')
const helmet = require('helmet')
const http = require('http') // TODO: Move to https Cacert
const compression = require('compression')
const path = require('path')

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/praw')

const app = express()
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const paths = {}
const definitions = {}

resources.forEach((r) => {
  const res = Resource(app, '/api', r.name, r.model).rest()
  const swagger = res.swagger()
  Object.assign(paths, swagger.paths)
  Object.assign(definitions, swagger.definitions)
})

app.get('/api', (req, res, next) => {
  res.json({
    swagger: '2.0',
    info: {
      description: 'Simple REST API',
      version: '0.0.1',
      title: 'Praw',
      contact: {
        name: 'dcerearr@gmail.com'
      },
      license: {
        name: 'MIT',
        url: 'http://opensource.org/licenses/MIT'
      }
    },
    host: 'localhost:3000',
    basePath: '/api',
    schemes: ['http'],
    definitions,
    paths
  })
})

app.use('/', express.static(path.join(__dirname, '../praw-app/dist')))

module.exports = http.createServer(app).listen(80)
