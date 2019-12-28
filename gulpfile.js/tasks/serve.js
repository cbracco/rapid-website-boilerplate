// Define Dependencies
const { series, watch } = require('gulp')
const browserSync = require('browser-sync').create()
const config = require('../config')
const favicons = require('./favicons')
const fonts = require('./fonts')
const icons = require('./icons')
const images = require('./images')
const scripts = require('./scripts')
const styles = require('./styles')
const templates = require('./templates')

// Task
function reload (done) {
  browserSync.reload()
  done()
}

function serve () {
  browserSync.init(config.serve)
  watch(config.watch.templates, series(templates, reload))
  watch(config.watch.styles, series(styles))
  watch(config.watch.scripts, series(scripts))
  watch(config.watch.images, series(images, reload))
  watch(config.watch.icons, series(icons, reload))
  watch(config.watch.favicons, series(favicons, reload))
  watch(config.watch.fonts, series(fonts, reload))
}

module.exports = serve







// // Define Dependencies
// var browserSync = require('browser-sync')
// var config = require('../config').serve
// var gulp = require('gulp')

// // Serve (gulp serve)
// gulp.task('serve', ['build'], function () {
//   browserSync(config)
// })
