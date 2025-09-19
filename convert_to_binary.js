let number = 9;
let reminder;
let inBinary = 0;
let count = 0;

while (number >= 1) {
    reminder = number % 2;
    if (reminder === 1) {
        inBinary = inBinary + (reminder * (10 ** count));
    } 
    number = (number - reminder) / 2;
    ++count;
}
console.log(inBinary);