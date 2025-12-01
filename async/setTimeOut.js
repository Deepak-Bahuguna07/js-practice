console.log("hello");

setTimeout(() => {
  console.log("inside 1");
}, 200);

setTimeout(() => {
  console.log("inside 2");
}, 199);

console.log("hey");

let a = 0;

while (a < 10000000000) {
  a++;
}

console.log("hi", a);

let b = 0;

while (b < 10000000000) {
  b++;
}

console.log("hi", b);
