const  limit= 60;
for (let input = 1; input <= limit; input++) {
    let isPrime = true;
    let divisor = 2;

    while (divisor < input && isPrime == true) {
        if (input % divisor === 0) {
            isPrime = false;
        }

        divisor++;
    }

    const result = (isPrime) ? "is a prime number." : "is a composite number.";
    console.log(input, result);
}
