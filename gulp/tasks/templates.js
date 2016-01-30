// Define Dependencies
var browserSync = require('browser-sync')
var config = require('../config').templates
var data = require('gulp-data')
var fs = require('fs')
var gulp = require('gulp')
var handleErrors = require('../utilities/handleErrors')
var plumber = require('gulp-plumber')
var renderNunjucks = require('gulp-nunjucks-render')

// Templates (gulp templates)
gulp.task('templates', function () {
  // Disable watch
  renderNunjucks.nunjucks.configure([config.watchPath], {
    watch: false
  })

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(data(function () {
      return JSON.parse(fs.readFileSync(config.dataPath))
    }))
    .pipe(renderNunjucks())
    .pipe(gulp.dest(config.dest))
})
