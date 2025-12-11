//  Flipped consecutive elements
//   [1,2,3,4] => [2,1,4,3];

function* flipConsecutiveElements(array) {
  let index = 0;

  while (index < array.length) {
    if (index & 1) yield array[index - 1];
    if (!(index & 1)) yield array[index + 1];
    index++;
  }
}

const seq = flipConsecutiveElements([1, 2, 3, 4]);
console.log([...seq]);
