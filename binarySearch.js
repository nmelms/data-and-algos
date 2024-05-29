//return index of num in array using binary search
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 22;
let l = 0;
let r = arr.length - 1;

const binarySearch = () => {
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] > num) {
      r = mid - 1;
    } else if (arr[mid] < num) {
      l = mid + 1;
    }
  }

  return -1;
};

console.log(binarySearch());
