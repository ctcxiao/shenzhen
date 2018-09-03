'use strict';

function get_union(collection_a, collection_b) {
  collection_b.forEach(value => {
    if(!collection_a.includes(value)){
      collection_a.push(value);
    }
  });
  return collection_a;
}

module.exports = get_union;

