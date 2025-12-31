// - chunk
//   2: [1,2,3,4] => [[1,2],[3,4]];
//   3,1: [1,2,3,4,5] => [[1,2,3],[3,4,5]];
//   3,2: [1,2,3,4,5] => [[1,2,3],[2,3,4],[3,4,5]];

function* getConsecutivePairs(array, chunk, overLap) {
  let index = 0;
  while (index < array.length) {  
    const identityArray = [array[index++]];
    while (identityArray[0] === array[index]) {
      identityArray.push(array[index]);
      index++;
    }
    yield identityArray;
  }
}

const seq = getConsecutivePairs([1, 2, 3, 4, 5]);

console.log(seq);
