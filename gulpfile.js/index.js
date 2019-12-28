// Define Dependencies
const { series } = require('gulp')
const buildDevelopment = require('./tasks/build')
const serveDevelopment = require('./tasks/serve')

// Tasks
const development = series(
  buildDevelopment,
  serveDevelopment
)

exports.default = development
