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

// console.log(fizzBuzz(1, 16));

const palindrome = (string, left = 0, right = string.length - 1) => {
  if (string[left] !== string[right]) {
    console.log(false);
    return false;
  }
  if (left > right) {
    console.log("true");
    return true;
  }

  palindrome(string, left + 1, right - 1);
};

// palindrome("bobcat");
let array = [1, 2, 3, [4, 5, 6, [10, 11, 12]], 7, 8, 9];
const flatten = (arr) => {
  let res = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      flatten(element);
    }
    res.push(element);
  }

  return res;
};

// console.log(flatten(array));
