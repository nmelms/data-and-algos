const str = "purple";
const wordBank = ["purp", "p", "ur", "le", "purpl"];

const countConstruct = (str, wordBank) => {
  if (str === "") return [[]];

  let res = [];
  for (let word of wordBank) {
    if (str.indexOf(word) === 0) {
      const suffix = str.slice(word.length);
      const suffixWays = countConstruct(suffix, wordBank);
      console.log(suffixWays);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      res.push(...targetWays);
    }
  }

  return res;
};

console.log(countConstruct(str, wordBank));
