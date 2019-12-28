// Define paths
const source = './source/'
const sourceAssets = './source/assets/'
const destination = './dist/'
const destinationAssets = './dist/assets/'

// Define Configuration
module.exports = {
  //
  // Watch
  //
  watch: {
    templates: [
      source + 'pages/**/*.+(html|nunjucks)',
      source + 'templates/**/*.+(html|nunjucks)',
      source + 'data/data.json'
    ],
    styles: sourceAssets + 'styles/**/*.css',
    scripts: sourceAssets + 'scripts/**/*.js',
    images: sourceAssets + 'images/**/*',
    icons: sourceAssets + 'icons/**/*',
    favicons: sourceAssets + 'favicons/**/*',
    fonts: sourceAssets + 'fonts/**/*'
  },
  //
  // Serve
  //
  serve: {
    server: {
      baseDir: destination
    },
    port: 9999,
    xip: true,
    notify: {
      styles: ['display: hidden; padding: 12px; font-family: sans-serif; position: fixed; font-size: 14px; z-index: 10000; left: 0; bottom: 0; width: 200px; margin: 0; border-top-left-radius: 0; border-top-right-radius: 3px; color: #fff; text-align: center; background-color: rgba(0, 0, 0, 0.75);']
    }
  },
  //
  // Build
  //
  build: {},
  //
  // Clean
  //
  clean: {
    src: destination
  },
  //
  // Styles
  //
  styles: {
    src: sourceAssets + 'styles/styles.css',
    path: sourceAssets + 'styles/',
    dest: destinationAssets + 'styles',
    processors: {
      cssnext: {
        browsers: 'last 2 versions'
      }
    }
  },
  //
  // Scripts
  //
  scripts: {
    src: sourceAssets + 'scripts/scripts.js',
    dest: destinationAssets + 'scripts'
  },
  //
  // Images
  //
  images: {
    src: sourceAssets + 'images/**/*',
    dest: destinationAssets + 'images'
  },
  //
  // Icons
  //
  icons: {
    src: sourceAssets + 'icons/**/*.svg',
    dest: destinationAssets + 'icons',
    processors: {
      sprite: {
        mode: {
          symbol: {
            dest: './',
            sprite: 'sprite.svg'
          }
        }
      }
    }
  },
  //
  // Favicons
  //
  favicons: {
    src: sourceAssets + 'favicons/**/*',
    dest: destinationAssets + 'favicons'
  },
  //
  // Fonts
  //
  fonts: {
    src: sourceAssets + 'fonts/**/*',
    dest: destinationAssets + 'fonts'
  },
  //
  // Templates
  //
  templates: {
    src: source + 'pages/**/*.+(html|nunjucks)',
    dest: destination,
    watchPath: source + 'templates/',
    dataPath: source + 'data/data.json'
  }
}
