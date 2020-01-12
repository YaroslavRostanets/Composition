'use strict';

const pipe = (...fns) => {
  if (fns.every( fn => typeof fn === 'function')) {
    return x => fns.reduce((res, fn) => fn(res), x);
  } else {
    throw new Error();
  }
}

module.exports = { pipe };
