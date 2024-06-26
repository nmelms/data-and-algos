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
let test = {
  id: 2,
  name: "nick",
  lastName: "test",
  type: {
    animail: "bird",
    sound: "chirp",
    birdtype: {
      birdtype: "woodpecker",
      beaktype: "long",
      length: [12, 15],
    },
  },
};
const flattenObj = (obj) => {
  let res = {};

  for (let element in obj) {
    if (typeof obj[element] === "object") {
      let newObj = flattenObj(obj[element]);
      for (let key in newObj) {
        res[key] = newObj[key];
      }
    } else {
      res[element] = obj[element];
    }
  }

  return res;
};
// console.log(flattenObj(test));

const sumRange = (num) => {
  if (num === 0) {
    return 0;
  }
  return num + sumRange(num - 1);
};
// console.log(sumRange(3));

const power = (base, exp) => {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};
// console.log(power(2, 1));

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

// console.log(factorial(5));
const callback = (num) => {
  return num < 7;
};
let array1 = [1, 2, 3, 4, 5, 6];
const all = (arr, callback) => {
  if (arr.length === 0) {
    return true;
  }
  let val = arr.shift();
  if (!callback(val)) {
    return false;
  } else {
    return all(arr, callback);
  }
};

// console.log(all(array1, callback));

const productOfArray = (arr) => {
  if (arr.length === 0) return 1;
  let val = arr.shift();
  return val * productOfArray(arr);
};

// console.log(productOfArray([1, 2, 3, 10]));
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};
const contains = (obj, item) => {
  for (let i in obj) {
    if (obj[i] === item) {
      return true;
    }

    if (typeof obj[i] === "object") {
      return contains(obj[i], item);
    }
  }

  return false;
};

// console.log(contains(nestedObject, "foo2"));
const array2 = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];
const countInt = (arr) => {
  let total = 0;

  for (let ele of arr) {
    console.log(ele);
    if (Array.isArray(ele)) {
      total += countInt(ele);
    } else {
      total += ele * ele;
    }
  }
  return total;
};

// console.log(countInt([[1, 2], 3]));

const repeat = (reps, num) => {
  let arr = [];
  if (reps < 1) return arr;

  arr.push(num);
  return repeat(reps - 1, num);
};

// console.log(repeat(3, 5));

const length = (str) => {
  let total = 0;
  total++;

  if (str.length === 1) return 1;

  total += length(str.slice(1));

  return total;
};

// console.log(length("hellohas"));

const sum = (arr, target) => {
  if (arr.length === 0) {
    return 0;
  }
  let total = 0;

  let val = arr.shift();
  if (val === target) {
    total++;
  }

  return total + sum(arr, target);
};

// console.log(sum([1, 2, 5, 5], 5));

const flatten1 = (arr) => {
  let res = [];

  for (let ele of arr) {
    if (Array.isArray(ele)) {
      let newArray = flatten1(ele);
      res = res.concat(newArray);
    } else {
      res.push(ele);
    }
  }
  return res;
};

// console.log(flatten1([1, [2, [3, [4, 5]]]]));

const some = (arr) => {
  if (arr.length === 1) return arr[0];

  let val = arr[0];

  return val + some(arr.slice(1));
};

console.log(some([1, 2, 3, 4, 5, 1]));
