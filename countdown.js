const countdown = (num) => {
  if (num === 0) {
    return;
  }
  console.log(num);
  countdown(num - 1);
};

const array = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
];

const dig = (arr) => {
  for (let item of arr) {
    if (item.length) {
      dig(item);
    } else {
      console.log(item);
    }
  }
};

dig(array);

// 1.)  if low > hight
// 2.)  infinit loop
// 3.) if high > low return
// 4.)
