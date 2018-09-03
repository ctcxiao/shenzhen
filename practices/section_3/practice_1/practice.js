function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(value => {
    console.log(value.key + ":" + value.count);
    object_b.value.forEach(element => {
        if (element.includes(value.key)) {
          value.count--;
        }
      }
    );
  });
  return collection_a;
}

module.exports = create_updated_collection;
