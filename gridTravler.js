const gridTravler = (h, w, memo = {}) => {
  let key = h + "," + w;
  if (key in memo) return memo[key];
  if (h === 0 || w === 0) return 0;
  if (h === 1 && w === 1) return 1;

  memo[key] = gridTravler(h - 1, w, memo) + gridTravler(h, w - 1, memo);

  return memo[key];
};

console.log(gridTravler(18, 18));
