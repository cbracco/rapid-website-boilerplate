// Define Dependencies
var atImport = require('postcss-import')
var browserReporter = require('postcss-browser-reporter')
var browserSync = require('browser-sync')
var cssnano = require('cssnano')
var cssnext = require('postcss-cssnext')
var config = require('../config').styles
var gulp = require('gulp')
var handleErrors = require('../utilities/handleErrors')
var mqpacker = require('css-mqpacker')
var plumber = require('gulp-plumber')
var postcss = require('gulp-postcss')
var removeRoot = require('postcss-remove-root')
var rename = require('gulp-rename')
var reporter = require('postcss-reporter')
var sourcemaps = require('gulp-sourcemaps')
var url = require('postcss-url')

// Styles (gulp styles)
gulp.task('styles', function () {
  var process = [
    atImport,
    url,
    cssnext(config.processors.cssnext),
    mqpacker({ sort: true }),
    removeRoot,
    reporter,
    browserReporter
  ]

  var minify = [cssnano]

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(sourcemaps.init())
    .pipe(postcss(process))
    .pipe(gulp.dest(config.dest))
    .pipe(postcss(minify))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
})
