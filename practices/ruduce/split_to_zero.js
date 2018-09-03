'use strict';

function strip(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  while (number > 0){
    result.push(strip(number));
    number = strip(number - interval);
  }
  result.push(strip(number));
  return result;
}

module.exports = spilt_to_zero;
