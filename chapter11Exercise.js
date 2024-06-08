let array = ["ab", "c", "def", "ghijfd"];
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const charSum = (arr, index = 0) => {
  if (index === arr.length) {
    return 0;
  }
  return arr[index].length + charSum(arr, index + 1);
};

// console.log(charSum(array));

const traingle = (num) => {
  if (num === 1) {
    return 1;
  }

  return num + traingle(num - 1);
};

// console.log(traingle(7));

const find = (idx = 0, str = "abcdefghijklmnopqrstuvwxyz") => {
  if (str[idx] === "x") {
    return idx;
  }

  find(idx + 1);
};

// console.log(find());

// binary search using recursion
const arr = [1, 3, 5, 7, 8, 9, 10];
const search = (arr, target, s = 0, e = arr.length - 1) => {
  if (s > e) {
    return -1;
  }

  let mid = Math.floor((s + e) / 2);

  if (arr[mid] === target) {
    return mid, arr[mid];
  }

  if (arr[mid] > target) {
    return search(arr, target, s, mid - 1);
  }
  if (arr[mid] < target) {
    return search(arr, target, mid + 1, e);
  }
};

console.log(search(arr, 11));
