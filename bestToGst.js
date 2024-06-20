var bstToGst = function (root) {
  let total = 0;
  const helper = (root) => {
    if (!root) return;

    helper(root.right);
    total += root.val;
    root.val = total;
    helper(root.left);
  };

  helper(root);
  return root;
};
