let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log();

// synthetic sugar
a = 10;
a += 10;
console.log(a);
a -= 10;
console.log(a);
a *= 10;
console.log(a);
a /= 10;
console.log(a);
a %= 10;
console.log(a);
console.log();

a = 10;
let c = a + b;
console.log(c);
console.log(c == a + b);
console.log();

let d = a++;
console.log(d);
console.log(a);

