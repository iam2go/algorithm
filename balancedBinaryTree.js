/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 110. Balanced Binary Tree
 * @see https://leetcode.com/problems/balanced-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 1;
    const left = dfs(node.left);
    const right = dfs(node.right);

    if (Math.abs(left - right) > 1 || !left || !right) return false;
    return Math.max(left, right) + 1;
  };

  return dfs(root) != false;
};
