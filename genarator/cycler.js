// Generate a cycle of elements
//   [1,2,3,4,5] => [1,2,3,4,5,1,2,3,4,5,...]

function* getCycler(array) {
  let index = 0;
  while (true) {
    if (index >= array.length - 1) return { done: true };
    for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
      yield array[innerIndex];
    }
    index++;
  }
}

const seq = getCycler([1, 2, 3, 4, 5]);

console.log([...seq]);