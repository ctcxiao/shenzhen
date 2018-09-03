'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(value => collection_a.includes(value));
}

module.exports = get_intersection;
