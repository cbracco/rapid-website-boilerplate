// Define Dependencies
const gutil = require('gulp-util')
const prettyHrtime = require('pretty-hrtime')
let startTime

// Task
module.exports = {
  start: function (filepath) {
    startTime = process.hrtime()
    gutil.log('Bundling', gutil.colors.green(filepath))
  },

  end: function (filepath) {
    const taskTime = process.hrtime(startTime)
    const prettyTime = prettyHrtime(taskTime)
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime))
  }
}
