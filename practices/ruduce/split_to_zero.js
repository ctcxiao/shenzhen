'use strict';

function createResult(result, i, b, a) {
  result[i] = +(b).toFixed(1);
  if (+b.toFixed(1) !== 0.0) {
    i++;
    result[i] = +(b - a).toFixed(1);
  }
  return i;
}

function doSplit(b, a, result, i) {
  while (b - a >= 0) {
    result[i] = +b.toFixed(1);
    b = b - a;
    i++;
  }
  return {b, i};
}

const split = (a, b) => {
  var result = [];
  var i = 0;
  const __ret = doSplit(b, a, result, i);
  i = createResult(result, i, b, a);
  return result;
};

function spilt_to_zero(number, interval) {
  //在这里写入代码
  return split(interval, number);
}

module.exports = spilt_to_zero;
