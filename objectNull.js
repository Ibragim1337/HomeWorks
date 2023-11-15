function showPrototypes(obj) {
  if (obj === null) {
    console.log(obj);
    return;
  }

  console.log(obj);
  showPrototypes(Object.getPrototypeOf(obj));
}

const exampleObject = {};
showPrototypes(exampleObject);
