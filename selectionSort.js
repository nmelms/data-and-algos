let unsorted = [0, 6, 2, 10, 20, 88, 15, 46, 100, 99, 88, 20, 20, 19];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let low = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[low]) {
        low = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
  }

  return arr;
};

console.log(selectionSort(unsorted));
