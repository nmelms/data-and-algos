const fizzBuzz = (start, end) => {
  if (start > end) {
    return;
  }

  if (start % 5 === 0 && start % 3 === 0) {
    console.log("fizzBuzz");
  } else if (start % 3 === 0) {
    console.log("fizz");
  } else if (start % 5 === 0) {
    console.log("buxx");
  } else {
    console.log(start);
  }

  fizzBuzz(start + 1, end);
};

console.log(fizzBuzz(1, 16));
