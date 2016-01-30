// Define Dependencies
var browserSync = require('browser-sync')
var config = require('../config').watch
var gulp = require('gulp')

// Ensure browser reloads after required tasks are complete
gulp.task('watch:styles', ['styles'])
gulp.task('watch:scripts', ['scripts'])
gulp.task('watch:images', ['images'], browserSync.reload)
gulp.task('watch:icons', ['icons'], browserSync.reload)
gulp.task('watch:favicons', ['favicons'], browserSync.reload)
gulp.task('watch:fonts', ['fonts'], browserSync.reload)
gulp.task('watch:templates', ['templates'], browserSync.reload)

// Watch (gulp watch)
gulp.task('watch', ['serve'], function () {
  // Styles
  gulp.watch(config.styles, ['watch:styles'])
  // Scripts
  gulp.watch(config.scripts, ['watch:scripts'])
  // Images
  gulp.watch(config.images, ['watch:images'])
  // Icons
  gulp.watch(config.icons, ['watch:icons'])
  // Favicons
  gulp.watch(config.favicons, ['watch:favicons'])
  // Fonts
  gulp.watch(config.fonts, ['watch:fonts'])
  // Templates
  gulp.watch(config.templates, ['watch:templates'])
})
