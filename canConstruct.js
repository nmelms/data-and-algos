const str = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef";
const wordBank = [
  "e",
  "eee",
  "eeeee",
  "eeeeeee",
  "eeeeeee",
  "eeeeeeeee",
  "eeeeeeeeeeeeee",
];

const canConstruct = (str, wordBank, memo = {}) => {
  if (memo[str]) return memo[str];
  if (str === "") return true;

  for (let word of wordBank) {
    if (str.startsWith(word)) {
      if (canConstruct(str.slice(word.length), wordBank, memo)) {
        memo[str] = true;
        return true;
      }
    }
  }
  memo[str] = false;
  return false;
};

console.log(canConstruct(str, wordBank));
