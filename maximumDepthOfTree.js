/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 104. Maximum Depth of Binary Tree
 * @see https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
};
