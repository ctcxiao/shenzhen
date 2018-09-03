'use strict';

function compare_collections(collection_a, collection_b) {
    collection_b = collection_b.sort();
    let isSame = true;
    collection_a.sort().forEach(function (value, index) {
        if (value !== collection_b[index]){
          isSame = false;
        }
    });
    return isSame;
}

module.exports = compare_collections;


