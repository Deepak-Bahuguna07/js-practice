const input = 6;
let isPrime = true;

// let modules = input % divisor;

// for (let divisor = 2; divisor < input; divisor++) {
//     if (input % divisor === 0) {
//         // console.log(divisor);   // printing divisor if number is not prime
//         isPrime = false;
//     }
// }

let divisor = 2;

while (divisor < input && isPrime == true) {
    if (input % divisor === 0) {
        isPrime = false;
    }
    divisor++;
}


// divisor++;

// if (input % divisor === 0 && divisor < input) {
//     console.log("kj");
//     isPrime = false;

// }

// divisor++;

// if (input % divisor === 0 && divisor < input) {
//     console.log("kj");
//     isPrime = false;

// }

// divisor++;

// if (input % divisor === 0 && divisor < input) {
//     console.log("kj");
//     isPrime = false;

// }

const result = (isPrime) ? "is a prime number." : "is a composite number.";
console.log(input, result);