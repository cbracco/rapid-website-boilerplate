// Define Dependencies
var browserify = require('browserify')
var browserSync = require('browser-sync')
var buffer = require('vinyl-buffer')
var config = require('../config').scripts
var gulp = require('gulp')
var handleErrors = require('../utilities/handleErrors')
var plumber = require('gulp-plumber')
var rename = require('gulp-rename')
var sourceStream = require('vinyl-source-stream')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')

// Scripts (gulp scripts)
gulp.task('scripts', function () {
  var b = browserify(config.src)

  return b.bundle()
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(sourceStream('scripts.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
      // Add transformation tasks to the pipeline here
      .pipe(gulp.dest(config.dest))
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
})
