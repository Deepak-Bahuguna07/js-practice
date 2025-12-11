// Generate all pair permutations
//   [1,2,3,4,5] => [[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],...]

function* getCombinations(array) {
  let index = 0;
  while (true) {
    if (index >= array.length - 1) return { done: true };
    for (let innerIndex = index + 1; innerIndex < array.length; innerIndex++) {
      yield [array[index], array[innerIndex]];
    }
    index++;
  }
}

const seq = getCombinations([1, 2, 3, 4, 5]);

console.log(seq);