const targetSum = 100;
const numbers = [1, 2, 5, 25];

const bestSum = (targetSum, numbers, memo = {}) => {
  if (memo[targetSum]) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortest = null;
  for (let num of numbers) {
    let dif = targetSum - num;
    let res = bestSum(dif, numbers, memo);

    if (res !== null) {
      const combo = [...res, num];
      if (shortest === null || combo.length < shortest.length) {
        shortest = combo;
      }
    }
  }

  memo[targetSum] = shortest;
  return shortest;
};

console.log(bestSum(targetSum, numbers));
