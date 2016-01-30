// Define Dependencies
var config = require('../config').fonts
var gulp = require('gulp')
var handleErrors = require('../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Fonts (gulp fonts)
gulp.task('fonts', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest))
})
