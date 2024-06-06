let array1 = [1, 2, 3, 4, 5, 10, 99, 23];
let array2 = [0, 2, 4, 6, 8, 23, 15];
let letterArray = ["a", "b", "d", "c", "e", "f", "g", "h", "a"];
let str = "the quick brownf box jumps over a lazy dog";
let word = "mmnnzzaaddiirrtgghheexx";

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

const dupe = (arr) => {
  let map = {};

  for (let i of arr) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      return i;
    }
  }
};

const missingLetter = (str) => {
  let map = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };

  for (let i of str) {
    map[i] = true;
  }

  for (let i in map) {
    if (!map[i]) {
      return i;
    }
  }
};

const firstNotDupe = (word) => {
  let map = {};

  for (let i of word) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }

  for (let i in map) {
    if (map[i] === 1) {
      return i;
    }
  }
};
console.log(firstNotDupe(word));
