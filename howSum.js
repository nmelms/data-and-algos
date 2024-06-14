const howSum = (targetSum, numbers, memo = {}) => {
  if (memo[targetSum]) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const res = howSum(remainder, numbers, memo);

    if (res !== null) {
      console.log(res);
      memo[targetSum] = num;
      return [...res, num];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(300, [7, 4]));
