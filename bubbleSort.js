let unsorted = [4, 6, 2, 10, 20, 88, 15, 46, 100, 99, 88, 20, 20, 19];

const bubbleSort = (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    arr.forEach((val, i) => {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    });
  }
  return arr;
};

console.log(bubbleSort(unsorted));
