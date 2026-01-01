const sort = (array) => {
  for (let outer = 1; outer < array.length; outer++) {
    for (let inner = outer; inner >= 0; inner--) {
      if (array[inner] < array[inner - 1]) {
        const currentValue = array[inner];
        array[inner] = array[inner - 1];
        array[inner - 1] = currentValue;
      }
    }
    // console.log(array, "rounds:", outer);
  }
};

const a = [1, 4, 3, 56, 43, 564, 32, 3, 10];
// const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(a);
sort(a);
console.log(a);
