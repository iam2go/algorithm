/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 543. Diameter of Binary Tree
 * @see https://leetcode.com/problems/diameter-of-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let longestDistance = 0;
  const dfs = (node) => {
    if (!node) return -1;

    const left = 1 + dfs(node.left);
    const right = 1 + dfs(node.right);

    longestDistance = Math.max(longestDistance, left + right);
    return Math.max(left, right);
  };

  dfs(root);
  return longestDistance;
};
