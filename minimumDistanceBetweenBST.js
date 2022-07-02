/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 783. Minimum Distance Between BST Nodes
 * @see https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let values = [];
  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  };

  inorder(root);
  return values.reduce(
    (min, value, i) =>
      i > 0 && min > value - values[i - 1] ? value - values[i - 1] : min,
    Infinity
  );
};
