function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    if (current > 1000) return { done: true };
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci();
// for (const x of seq) {
//   console.log(x);
// }

// const firstThreeDigitTerm = seq.find((n) => n >= 100);
// console.log(firstThreeDigitTerm);
