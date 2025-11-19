// const add = function (x, y) {
//   return [this.x, x] + [this.y, y];
// };

// add.call({ x: 7, y: 9 }, 4, 8);

// const add = (first, second) => first + second;
// add.apply(null, [2, 3]);

// const power = function (x, y) {
//   return Math.pow(y, x);
// };
// const power2 = power.bind(null, 2);
// const power4 = power.bind(null, 4);

// const isBetweenRange = (x, y, z) => x > z && y < z;
// const isBetween10and20 = isBetweenRange.bind(null, 10, 20);

// const sum = (array) => array.reduce((a, b) => a + b, 0);

// const fakeBind = (fn, ...initialArgs) => (...remainingArgs) =>
//   fn(...[...initialArgs, ...remainingArgs]);

// const whatPercentOfTotal = (allMarks, myMarks) =>
//   (myMarks / sum(allMarks)) * 100;

// const whatIsMyPercentage = whatPercentOfTotal.bind(null, [1, 2, 3, 34, 45, 9]);

// const power = function (x, y) {
//   return Math.pow(y, x);
// };

// const fakeBind2 = function (thisValue, functionToCall, InitialValue) {
//   return (remaining) => {
//     return functionToCall.call(thisValue, InitialValue, remaining);
//   };
//

// [(x) => x + 1, (x) => x * x].map.bind([100, 100], (x) => x).map((x, i) => x(i));

// const a = [(x) => x + 1, (x) => x * x].map.bind([100, 100], (x) => x);

// const obj = {
//   name: "deepak",
//   f() {
//     return this;
//   },
// };
// const obj1 = obj.f.bind(null);

// const a = [1, 2, 3, 4, 6].filter.bind([1, 2, 3], (x) => x % 2 === 0);

// const obj = {
//   name: "deepak",
//   this
// };

/*1.*/
// const add = function (a, b) {
//   return a + b;
// };
// add.call(2, 3);

/*2.*/

// const add = function (a, b) {
//   return this + b;
// };
// add.call(2, 3, 4);

// /*3.*/

// const add = function (a, b) {
//   return this + a + b;
// };
// add.apply([2, 3, 4]);

/*7.*/

// const colors = ["red", "green", "blue"];
// colors.map = colors.map.bind([...colors].reverse());
// console.log(...colors.map(function (x) {
//   return x;
// }));

/*8*/
// const ff = function (b, a) {
//   this[b] += a;
//   return this;
// };

// const rf = ff.bind({ a: 2 });
// console.log([1, 2, 3].reduce(rf));

/*11*/
// const points = { x: 12, y: 13, z: 12 };
// const {y,...rest} = points;

/*12*/
const point1 = { x: 12, y: 13, z: 11 };
const point2 = { x: 1, y: 3, z: 1 };
const boring = function () {
  return this;
};
const a = boring.bind(point2).bind(3);
console.log(a.call(2));
