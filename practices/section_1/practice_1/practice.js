function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(value => collection_b.includes(value));
}

module.exports = collect_same_elements;
