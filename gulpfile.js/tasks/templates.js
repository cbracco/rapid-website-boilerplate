// Define Dependencies
const { dest, src } = require('gulp')
const config = require('../config').templates
const data = require('gulp-data')
const fs = require('fs')
const handleErrors = require('../utilities/handle-errors')
const plumber = require('gulp-plumber')
const renderNunjucks = require('gulp-nunjucks-render')

// Templates (gulp templates)
function templates () {
  // Disable watch
  renderNunjucks.nunjucks.configure([config.watchPath], {
    watch: false
  })

  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(data(function () {
      return JSON.parse(fs.readFileSync(config.dataPath))
    }))
    .pipe(renderNunjucks())
    .pipe(dest(config.dest))
}

module.exports = templates
