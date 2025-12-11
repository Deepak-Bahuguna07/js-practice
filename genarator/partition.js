// partition by
//   identity: [1,1,1,2,2,1,1,3,3,2] => [[1,1,1],[2,2],[1,1],[3,3],[2]]
//   isEven: [1,3,1,2,2,1,1,3,5,2] => [[1,3,1],[2,2],[1,1,3,5],[2]]

function* seprateByIdentity(array) {
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

const seq = seprateByIdentity([1, 1, 1, 2, 2, 1, 1, 3, 3, 2]);
console.log([...seq]);

/*part-2*/
function* seprateByEvan(array) {
  let index = 0;
  while (index < array.length) {
    const identityArray = [array[index++]];
    while (identityArray[0] % 2 === array[index] % 2) {
      identityArray.push(array[index]);
      index++;
    }
    yield identityArray;
  }
}

const partitionByEvenOdd = seprateByEvan([1, 3, 1, 2, 2, 1, 1, 3, 5, 2]);
console.log([...partitionByEvenOdd]);
