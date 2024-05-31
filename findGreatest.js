let array = [10, 8, 22, 55, 99, 0, 1, 101, 100];

const findGreatest = (arr) => {
  let max = 0;

  arr.forEach((value) => {
    max = Math.max(value, max);
  });

  return max;
};

console.log(findGreatest(array));
