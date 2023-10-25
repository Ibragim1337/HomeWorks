function fibonacci(number) {
  if (number <= 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    let previousNumber = 0;
    let currentNumber = 1;
    for (let i = 2; i <= number; i++) {
      let nextNumber = previousNumber + currentNumber;
      previousNumber = currentNumber;
      currentNumber = nextNumber;
    }
    return currentNumber;
  }
}
console.clear();

console.log(fibonacci(10));