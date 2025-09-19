let endPoint = 10;
let pointer = 1;
let fact = 1;
while (pointer <= endPoint) {
    fact *= pointer;
    pointer++;
}

console.log("factorial of ", endPoint, " is :", fact);