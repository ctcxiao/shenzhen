'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if (number_a === number_b) {
    result[0] = number_b;
    return result;
  }

  if (number_b > number_a) {
    for (var i = number_a; i <= number_b; i++) {
      result[i-1] = i;
    }
  } else {
    for (var i = number_a; i >= number_b; i--) {
      result[number_a-i] = i;
    }
  }

  return result;
}

module.exports = get_integer_interval;

