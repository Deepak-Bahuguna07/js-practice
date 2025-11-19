// const login = (originalEmail, originalPassword) => (email, password) =>
//   originalEmail === email && originalPassword === password;

// const createLoginCradentials = (email, password) => login(email, password);

// const a = createLoginCradentials("deepak@gmail.com","1234");
// a("deepak@gmail.com","1234");

// const createFibo = (x,y) => {
//   let i = 0;
//   return () =>{
//    if( i === 0 ) return i++;
//    if( i === 1 ) return i++;
//     const fibo = y + x;
//     y= fibo;
//     x= y-x;
//     return  fibo}
// }

// const something = (i = 0) => [() => i++, () => i--];
// const [a, b] = something();
// [a, b, b, a, a, b, a, b].map((x) => (((x() && a()) || b()) && b() || a()));

// const fn = (b) => (c) => (d) => b(c(d));
// const inc = (x) => x + 1;
// const sqr = (x) => x * x;
// const g = fn(inc)(sqr);
// [1, 2, 3].map(g);

// const isBetween = (startingRange, endRange) => (number) =>
//   number >= startingRange && number <= endRange;

// const isBetween10and20 = isBetween(10, 20);
// [1, 23, 54, 5, 54, 2, 12, 20, 11].filter(isBetween10and20);

// const countValue = (start = 0) => {
//   let i = start;
//   return {
//     "increment": () => ++i,
//     "decrement": () => --i,
//     "value": () => i,
//   };
// };
// const counter = countValue(0);

// const add = function () {
//   return this.x + this.y;
// };
// add.call({ x: 7, y: 9 });

// const add = function (x, y) {
//   console.log(x, y);
//   return x + y;
// };

// add.call(null,8, 91);

// const person = () => {
//   return {
//     setVar: function () {
//       // console.log(this.name, "s");
//       this.intern = {
//         name: this.name,
//         age: this.age,
//       };
//       console.log(intern, "s");
//     },
//     getVar: function () {
//       console.log(this.name);
//       return [this.name,this.age];
//     },
//   };
// };

// const intern = person.call({ intern: "intern1" });
// intern.setVar({ name: "deepak", age: 21 });

// intern;

