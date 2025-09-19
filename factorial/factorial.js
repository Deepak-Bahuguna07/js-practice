const inputForfactorial = 5;
let factorialOfNumber = 1;
let count = 0;

while (inputForfactorial !== count) {
    factorialOfNumber = factorialOfNumber * (inputForfactorial - count);
    count++;
}

console.log("factorial of",inputForfactorial,"is :", factorialOfNumber);
