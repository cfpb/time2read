# time2read  [![Build Status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url]

> Get the approximate (and totally unscientific) number of milliseconds it takes for a human to read a sentence.

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install time2read --save
```

Or grab the `dist/time2read.js` file and include it at the bottom of your HTML page:

```html
<script src="time2read.js"></script>
```

## Usage

```javascript
var time2read = require('time2read');

time2read('I ate all the jellybeans and now I need to brush my teeth.'); // returns 3610
time2read('Sup?'); // returns 1180
time2read(fs.readFileSync('./package.json', 'utf8')) // returns 45910
```

## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running Tests

We are using [nodeunit](https://github.com/caolan/nodeunit) to test. To run tests, first install nodeunit and any dependencies via npm:

```
npm install
```

Run tests with:

```
npm test
```

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](http://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

Software source code previously released under an open source license and then modified by CFPB staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open-source license.

For further details, please see: http://www.consumerfinance.gov/developers/sourcecodepolicy/

[npm-image]: https://img.shields.io/npm/v/time2read.svg?maxAge=2592000&style=flat-square
[npm-url]: https://www.npmjs.com/package/time2read
[travis-image]: https://img.shields.io/travis/cfpb/time2read.svg?maxAge=2592000&style=flat-square
[travis-url]: https://travis-ci.org/cfpb/time2read
