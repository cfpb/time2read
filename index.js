/*
 * time2read
 *
 * A work of the public domain from the Consumer Financial Protection Bureau.
 */

'use strict';

function time2read(str, opts) {
  if (typeof str !== 'string') return new Error('Cannot count length of non-string.');
  var chars = str.length,
      warmUp = 1000;
  return warmUp + chars * 45;
}

module.exports = time2read;
