// Define Dependencies
const { dest } = require('gulp')
const browserify = require('browserify')
const browserSync = require('browser-sync')
const buffer = require('vinyl-buffer')
const config = require('../config').scripts
const handleErrors = require('../utilities/handle-errors')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const sourceStream = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

// Task
function scripts () {
  const b = browserify(config.src)

  return b.bundle()
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(sourceStream('scripts.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
      // Add transformation tasks to the pipeline here
      // .pipe(dest(config.dest))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.dest))
    .pipe(browserSync.stream())
}

module.exports = scripts
