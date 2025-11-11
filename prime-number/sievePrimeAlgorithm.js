let n = 10000000;
let arr = [];

for (let index = 0; index < n; index++) {
  arr[index] = true;
}

for (let index = 2; index < n; index++) {
  if (arr[index]) {
    console.log(index);
    for (let i = index * index; i < n; i += index) {
      arr[i] = false;
    }
  }
}
