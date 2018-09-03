function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(value => {
    console.log(value.key + ":" + value.count);
    object_b.value.forEach(element => {
        if (element.includes(value.key)) {
          let c = Math.floor(value.count/3);
          value.count-=c;
        }
      }
    );
  });
  return collection_a;
}

module.exports = create_updated_collection;
