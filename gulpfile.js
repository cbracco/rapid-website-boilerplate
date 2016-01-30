// Define Dependencies
var requireDir = require('require-dir')

// Recursively require gulp tasks
requireDir('./gulp/tasks', {
  recurse: true
})
