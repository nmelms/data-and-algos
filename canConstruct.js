const str = "enterapotentpot";
const wordBank = ["a", "p", "ent", "enter", "ot", "o", "t"];

const canConstruct = (str, wordBank) => {
  if (str === "") return true;

  for (let word of wordBank) {
    if (str.startsWith(word)) {
      console.log(word);
      if (canConstruct(str.slice(word.length), wordBank)) {
        return true;
      }
    }
  }
  return false;
};

console.log(canConstruct(str, wordBank));
