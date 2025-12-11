// Prime number series

function* primeNumber() {
  let number = 1;
  while (true) {
    let isPrime = true;
    let divisor = 2;

    while (divisor < number && isPrime === true) {
      if (number % divisor === 0) {
        isPrime = false;
      }
      divisor++;
    }
    if (isPrime) yield number;
    number++;
  }
}

const seq = primeNumber();


