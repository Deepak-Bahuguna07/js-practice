const merge = (arr1, arr2) => {
  let mergedArray = [];
  let arr1Index = 0;
  let arr2Index = 0;

  // console.log(arr1,arr2,"merge");
  while (arr1.length > arr1Index && arr2.length > arr2Index) {
    const currentValue = arr1[arr1Index] <= arr2[arr2Index]
      ? arr1[arr1Index++]
      : arr2[arr2Index++];
    mergedArray.push(currentValue);
  }

  if (arr1.length > arr1Index || arr2.length > arr2Index) {
    mergedArray = arr1.length > arr1Index
      ? mergedArray.concat(arr1.slice(arr1Index, arr1.length))
      : mergedArray.concat(arr2.slice(arr2Index, arr2.length));
  }
  return mergedArray;
};

const isEven = (x) => x % 2 === 0;
const mergeSort = (candidate) => {
  if (candidate.length === 1) {
    return candidate;
  }

  let mergedArray = [];
  const mid = isEven(candidate.length)
    ? candidate.length / 2
    : (candidate.length + 1) / 2;
  mergedArray = merge(
    mergeSort(candidate.slice(0, mid)),
    mergeSort(candidate.slice(mid, candidate.length)),
  );

  return mergedArray;
};

// const a = [1, 5, 7, 9, 2, 3, 8, 9, 10];
// const a = [111, 51, 7, 92, 2, 346, 8, 99, 10];
const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log("before sorting: ",a);
console.log("after sorting: ",mergeSort(a));
