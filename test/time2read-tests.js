'use strict';

var fs = require('fs');
var time2read = require('../index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.time2read = {
  setUp: function(done) {
    // setup here
    done();
  },
  'return milliseconds based on length of string': function(test) {
    test.expect(7);
    test.equal(time2read('Sup?'), 1180, 'should read short words');
    test.equal(time2read('blubber flubber'), 1675, 'should read multiple words');
    test.equal(time2read('I ate all the jellybeans and now I need to brush my teeth.'), 3610, 'should handle lots of words');
    test.equal(time2read(fs.readFileSync('./package.json', 'utf8')), 45910, 'should calculate long stuff');
    test.throws(time2read(function blah(){}), 'should throw on non-string');
    test.throws(time2read({one: 1}), 'should throw on non-string');
    test.throws(time2read([1, 2, 3]), 'should throw on non-string');
    test.done();
  }
};
