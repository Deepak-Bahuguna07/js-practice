// console.log("1: start");

// setTimeout(() => console.log("2: set 1"), 0);

// Promise.resolve()
//   .then(() => console.log("p1"))
//   .then(() => console.log("p2"));

// const a = async () => {
//   console.log("async start");

//   try {
//     await Promise.resolve();
//     console.log("after await");
//     // throw new error("error");
//     console.log("after throw");
//   } catch (error) {
//     console.log("caught error");
//     // return "caught";
//   } finally {
//     console.log("finally");
//   }
//   console.log("finally");
// };

// const result = a();
// result.then((val) => console.log("result", val));

// Promise.resolve().then(() => {
//   console.log("p3");
//   setTimeout(() => console.log("set 2"), 0);
// });

// console.log("end");

let index = 0;
const reader = (length = 5, arr = [1, 2, 3, 4, 5]) => {
  const output = { value: [], done: false };
  if (index === length) return { value: undefined, done: true };
  for (let i = 0; i < length; i++) {
    output.value.push(arr[i]);
    index++;
  }

  return output;
};

reader();
