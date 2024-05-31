let unsorted = [0, 6, 2, 10, 20, 88, 15, 46, 100, 99, 88, 20, 20, 19];

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let position = i - 1;
    while (position >= 0) {
      if (arr[position] > temp) {
        arr[position + 1] = arr[position];
        position--;
      } else {
        break;
      }
    }
    arr[position + 1] = temp;
  }
  return arr;
};

console.log(insertionSort(unsorted));
