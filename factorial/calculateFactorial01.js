const input = 10;
let factorialOfNumber = 1;

// factorialOfNumber = factorialOfNumber * input;
// console.log("input :", input, "factorial of number :", factorialOfNumber);

// factorialOfNumber = factorialOfNumber * (input - 1);
// console.log("input :", input, "factorial of number :", factorialOfNumber);

// factorialOfNumber = factorialOfNumber * (input - 2);
// console.log("input :", input, "factorial of number :", factorialOfNumber);

// factorialOfNumber = factorialOfNumber * (input - 3);
// console.log("input :", input, "factorial of number :", factorialOfNumber);

// factorialOfNumber = factorialOfNumber * (input - 4);
// console.log("input :", input, "factorial of number :", factorialOfNumber);

// factorialOfNumber = factorialOfNumber * (input - 5);
// console.log("input :", input, "factorial of number :", factorialOfNumber);

// factorialOfNumber = factorialOfNumber * (input - 6);
// console.log("input :", input, "factorial of number :", factorialOfNumber);

// factorialOfNumber = factorialOfNumber * (input - 7);
// console.log("input :", input, "factorial of number :", factorialOfNumber);

// factorialOfNumber = factorialOfNumber * (input - 8);
// console.log("input :", input, "factorial of number :", factorialOfNumber);

let count = 0;

while (input !== count) {
    factorialOfNumber = factorialOfNumber * (input - count);
    console.log("input :", input - count, "factorial of number :", factorialOfNumber);
    count++;
}

