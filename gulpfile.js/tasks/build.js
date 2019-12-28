// Define Dependencies
const { parallel, series } = require('gulp')
const clean = require('../utilities/clean')
const favicons = require('./favicons')
const fonts = require('./fonts')
const icons = require('./icons')
const images = require('./images')
const scripts = require('./scripts')
const styles = require('./styles')
const templates = require('./templates')

// Task
function build (done) {
  return series(
    clean,
    parallel(
      styles,
      scripts,
      images,
      icons,
      favicons,
      fonts,
    ),
    templates
  )(done)
}

module.exports = build

// // Define Dependencies
// var gulp = require('gulp')
// var runSequence = require('run-sequence')

// // Build (gulp build)
// gulp.task('build', function (callback) {
//   runSequence(
//     'clean',
//     [
//       'styles',
//       'scripts',
//       'images',
//       'icons',
//       'favicons',
//       'fonts'
//     ],
//     'templates',
//     callback
//   )
// })
