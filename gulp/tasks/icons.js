// Define Dependencies
var config = require('../config').icons
var gulp = require('gulp')
var handleErrors = require('../utilities/handleErrors')
var plumber = require('gulp-plumber')
var svgSprite = require('gulp-svg-sprite')

// Icons (gulp icons)
gulp.task('icons', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulp.dest(config.dest))
    .pipe(svgSprite(config.processors.sprite))
    .pipe(gulp.dest(config.dest))
})
