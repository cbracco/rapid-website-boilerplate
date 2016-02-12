# rapid-website-boilerplate

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Build Status](https://travis-ci.org/cbracco/rapid-website-boilerplate.svg)](https://travis-ci.org/cbracco/rapid-website-boilerplate)

> A basic front-end boilerplate for rapid website prototyping in the browser using [Gulp][gulp], [Nunjucks][nunjucks], [PostCSS][postcss], [Browserify][browserify], [Browsersync][browsersync], [svg-sprite][svg-sprite] and more.

This tool is a front-end website boilerplate that makes it easier to begin designing and developing rapid website prototypes in the browser. It is a barebones static site generator that automates a few common development tasks and includes a few convenience features so you can focus more on creating a design and less on optimizing a workflow.

## Features

- [Gulp][gulp] as a build system to automate tasks and watch files for changes.
- [Nunjucks][nunjucks] as a front-end templating language.
- [PostCSS][postcss] for CSS [file imports][postcss-import], [url rebasing][postcss-url], [future-friendly syntax, vendor prefixing][postcss-cssnext], [browser][postcss-browser-reporter] & [console][postcss-reporter] error reporting, and more.
- [Browserify][browserify] for requiring JavaScript modules and bundling dependencies in the browser.
- [Browsersync][browsersync] with [xip.io][xip.io] for serving files, live-reloading browsers, and multi-device testing.
- [svg-sprite][svg-sprite] to automatically generate and optimize an SVG sprite from raw SVG files.

## Installation

Clone this repository to your local machine, and install its dependencies with the following command(s):

```bash
git clone git@github.com:cbracco/rapid-website-boilerplate.git
cd rapid-website-boilerplate/
npm install
```

## Usage

To start working, first run the following command(s):

```bash
npm start
```

This will run the [default Gulp task][gulp-task-default] which builds the website templates and assets, starts a local server with Browsersync, opens the project in your default browser, and begins watching for file changes.

## Credits

> *“If I have seen further it is by standing on ye sholders of Giants.”*
> &mdash; [Issac Newton][issac-newton-quote]

rapid-website-boilerplate is a project by [@cbracco][cbracco] and its [contributors][contributors]. It is influenced by the following organizations, projects, articles, and individuals:

- [gulp-tutorial][gulp-tutorial] by [@kogakure][kogakure]
- [tape-standard][tape-standard] by [@rstacruz][rstacruz]
- [How to Modularize HTML Using Template Engines and Gulp][gulp-nunjucks-article] by [@zellwk][zellwk]

Thank you all for your hard work.

## [Contributing](CONTRIBUTING.md)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

[browserify]: http://browserify.org
[browsersync]: https://browsersync.io
[cbracco]: http://cbracco.me
[contributors]: https://github.com/cbracco/rapid-website-boilerplate/graphs/contributors
[gulp]: http://gulpjs.com
[gulp-nunjucks-article]: http://www.zell-weekeat.com/nunjucks-with-gulp
[gulp-task-default]: gulp/tasks/default.js
[gulp-tutorial]: https://github.com/kogakure/gulp-tutorial
[issac-newton-quote]: https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants
[kogakure]: https://github.com/kogakure
[nunjucks]: https://mozilla.github.io/nunjucks
[postcss]: https://github.com/postcss/postcss
[postcss-browser-reporter]: https://github.com/postcss/postcss-browser-reporter
[postcss-cssnext]: https://github.com/MoOx/postcss-cssnext
[postcss-import]: https://github.com/postcss/postcss-import
[postcss-reporter]: https://github.com/postcss/postcss-reporter
[postcss-url]: https://github.com/postcss/postcss-url
[rstacruz]: https://github.com/rstacruz
[svg-sprite]: https://github.com/jkphl/svg-sprite
[tape-standard]: https://github.com/rstacruz/tape-standard
[xip.io]: http://xip.io
[zellwk]: https://gist.github.com/zellwk
