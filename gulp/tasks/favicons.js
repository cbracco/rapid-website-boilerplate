// Define Dependencies
var config = require('../config').favicons
var gulp = require('gulp')
var handleErrors = require('../utilities/handleErrors')
var plumber = require('gulp-plumber')

// Favicons (gulp favicons)
gulp.task('favicons', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest))
})
