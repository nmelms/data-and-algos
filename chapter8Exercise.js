let array1 = [1, 2, 3, 4, 5, 10, 99, 23];
let array2 = [0, 2, 4, 6, 8, 23, 15];

const intersection = (arr1, arr2) => {
  let map = {};
  let res = [];

  for (let num of arr1) {
    map[num] = 1;
  }

  for (let num of arr2) {
    if (map[num]) {
      res.push(num);
    }
  }

  return res;
};

console.log(intersection(array1, array2));
