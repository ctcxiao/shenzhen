'use strict';

function collect_min_number(collection) {
  return collection.sort().reverse().pop();
}

module.exports = collect_min_number;

