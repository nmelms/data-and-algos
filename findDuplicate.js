let unsorted = [4, 6, 2, 10, 20, 88];

const dupe = (arr) => {
  let map = {};

  for (let val of arr) {
    if (map[val]) {
      return false;
    } else {
      map[val] = 1;
    }
  }

  return true;
};

console.log(dupe(unsorted));
