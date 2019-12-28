// Define Dependencies
const { dest, src } = require('gulp')
const browserSync = require('browser-sync')
const cssnano = require('cssnano')
const config = require('../config').styles
const handleErrors = require('../utilities/handle-errors')
const mqpacker = require('css-mqpacker')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const postcssCssnext = require('postcss-cssnext')
const postcssImport = require('postcss-import')
const postcssRemoveRoot = require('postcss-remove-root')
const postcssUrl = require('postcss-url')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')

// Task
function styles () {
  browserSync.notify('Rebuilding Styles&hellip;')

  const process = [
    postcssImport,
    postcssUrl,
    postcssCssnext(config.processors.cssnext),
    mqpacker({ sort: true }),
    postcssRemoveRoot
  ]

  const minify = [cssnano]

  return src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(sourcemaps.init())
    .pipe(postcss(process))
    .pipe(dest(config.dest))
    .pipe(postcss(minify))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.dest))
    .pipe(browserSync.stream())
}

module.exports = styles
