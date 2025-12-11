// - Generate sequences of consecutive pairs
//   [1,2,3,4,5] => [[1,2],[2,3],[3,4],[4,5]]

function* getConsecutivePairs(array) {
  let index = 0;
  while (true) {
    if (index >= array.length - 1) return { done: true };
    yield [array[index], array[index + 1]];
    index++;
  }
}

const seq = getConsecutivePairs([1, 2, 3, 4, 5]);

console.log(seq);
