const canSum = (target, arr, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let ele of arr) {
    const remainder = target - ele;
    if (canSum(remainder, arr, memo) === true) {
      memo[target] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
};

console.log(canSum(8, [2, 3, 5])); // should print true
