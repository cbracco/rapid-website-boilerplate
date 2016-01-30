# rapid-website-boilerplate

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Build Status](https://travis-ci.org/cbracco/rapid-website-boilerplate.svg)](https://travis-ci.org/cbracco/rapid-website-boilerplate)

> A basic front-end boilerplate for rapid website prototyping in the browser using [Gulp], [Nunjucks], [PostCSS], [Browsersync], and more.

This tool is a front-end website boilerplate that makes it easier to begin designing and developing rapid website prototypes in the browser. It is a barebones static site generator that automates a few common development tasks and includes a few convenience features so you can focus more on creating a design and less on optimizing a workflow.

## Features

- [Gulp] as a build system to automate tasks and watch files for changes.
- [Browsersync] for serving files, live-reloading browsers, and multi-device testing.
- [Nunjucks] as a front-end templating language.
- [PostCSS] for CSS [file imports], [url rebasing], [future-friendly syntax, vendor prefixing], [reporting]  [tools], and more.

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

This will run the [default Gulp task] which builds the website templates and assets, starts a local server with [Browsersync], opens the project in your default browser, and begins watching for file changes.

## Credits

> *“If I have seen further it is by standing on ye sholders of Giants.”*
> &mdash; Issac Newton

rapid-website-boilerplate is a project by [@cbracco] and its [contributors]. It is influenced by the following organizations, projects, articles, and individuals:

- [gulp-tutorial] by [@kogakure]
- [tape-standard] by [@rstacruz]
- [How to Modularize HTML Using Template Engines and Gulp] by [@zellwk]

Thank you all for your hard work.

## [Contributing](CONTRIBUTING.md)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

[@cbracco]: http://cbracco.me
[@kogakure]: https://github.com/kogakure
[@rstacruz]: https://github.com/rstacruz
[@zellwk]: https://gist.github.com/zellwk
[Browsersync]: https://browsersync.io
[contributors]: https://github.com/cbracco/rapid-website-boilerplate/graphs/contributors
[default Gulp task]: gulp/tasks/default.js
[file imports]: https://github.com/postcss/postcss-import
[future-friendly syntax, vendor prefixing]: https://github.com/MoOx/postcss-cssnext
[url rebasing]: https://github.com/postcss/postcss-url
[Gulp]: http://gulpjs.com
[How to Modularize HTML Using Template Engines and Gulp]: http://www.zell-weekeat.com/nunjucks-with-gulp
[gulp-tutorial]: https://github.com/kogakure/gulp-tutorial
[Nunjucks]: https://mozilla.github.io/nunjucks
[PostCSS]: https://github.com/postcss/postcss
[reporting]: https://github.com/postcss/postcss-reporter
[tape-standard]: https://github.com/rstacruz/tape-standard
[tools]: https://github.com/postcss/postcss-browser-reporter
