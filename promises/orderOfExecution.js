console.log("<--START-->");
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("first..");
      resolve("first");
    }, 2000);
  }, 2000);
});

setTimeout(() => {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("second..");
      resolve("second");
    }, 4000);
  });
}, 0);

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("third..");
    resolve("third");
  }, 3000);
});

const j = Promise.all([p1, p3]);
j.then((x) => console.log(x, j));
console.log(j);
// const j = Promise.any([p1, p3]);
// j.then((x) => console.log(x, j));
// console.log(j);

console.log("<--BETWEEN-->");

new Promise((resolve) => {
  console.log("inside");
  resolve(1);
})
  .then((data) => console.log("hey1", data) || ++data)
  .then((data) => console.log("hey2", data) || ++data)
  .then((data) => console.log("hey3", data) || ++data)
  .then((data) => console.log("hey4", data) || ++data);

console.log("<--END-->");
