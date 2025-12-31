const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
    // reject("first");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second");
    // reject("second");
  }, 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("third");
    // reject("third");
  }, 3000);
});

// Promise.all([p1, p2, p3])
//   .then((x) => console.log(x))
//   .catch((x) => console.log(x, 'error'));

Promise.any([p1, p2, p3])
  .then((x) => console.log(x))
  .catch((x) => console.log("error", x));
