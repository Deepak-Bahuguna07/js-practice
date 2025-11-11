// const sort = function (data, compare) {
//   for (let i = 0; i < data.length - 1; i++) {
//     for (let j = 0; j < data.length - i - 1; j++) {
//       if (compare(data[i], data[j])) {
//         const temp = data[i];
//         data[i] = data[j];
//         data[j] = temp;
//       }
//     }
//   }
// }

// const isGreaterThan = function (a, b) {
//   return a > b;
// }

// const isLessThan = function (a, b) {
//   return a < b;
// }

// const array = [1000, 115, 67, 34, 104, 43, 155];

// sort(array, isGreaterThan);

// console.log(`Assending data: ${array}`);

// sort(array, isLessThan);

// console.log(`descending data: ${array}`);


const sort = function (data, compare) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (compare(data[j], data[j + 1])) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
}

const isGreaterThan = function (a, b) {
  return a > b;
}

const isLessThan = function (a, b) {
  return a < b;
}

const array = [1000, 115, 67, 34, 104, 43, 155];

sort(array, isGreaterThan);

console.log(`Assending data: ${array}`);

sort(array, isLessThan);

console.log(`descending data: ${array}`);