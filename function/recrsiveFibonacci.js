function fibonacci(n, string) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  if (n <= 0) {
    return;
  }

  string += fibonacci(n) + fibonacci(n - 1);
  return string;
}

fibonacci(5, "");