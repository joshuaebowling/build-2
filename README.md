# express-react-browserify-grunt-mocha-starter
## Purpose: regardless of the project, packaging for the web and unit testing are necessary. As react is quite fashionable, I want to build with it. Hopefully, this is a good start.
## Usage:
   * npm install
   * npm test
   * npm start

## How it works as of now:
It's pretty simple so far as I can tell:
  * For packaging, browserify pre-processes w/ reactify.
  * grunt-mocha-test is using a compiler I borrowed from [mocha-react](https://github.com/danvk/mocha-react), so thanks @danvk and all the contributors to that fine repository.
  * I've used iojs 3.3.0 in to run it.
**A note about the express implementation: it's very minimal. I just wanted a webserver that could serve a single page with some react on it.**

