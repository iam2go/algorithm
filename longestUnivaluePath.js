/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 687. Longest Univalue Path
 * @see https://leetcode.com/problems/longest-univalue-path/submissions/
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let longestDistance = 0;
  const dfs = (node, value) => {
    if (!node) return 0;

    const left = dfs(node.left, node.val);
    const right = dfs(node.right, node.val);

    longestDistance = Math.max(longestDistance, left + right);
    return node.val === value ? Math.max(left, right) + 1 : 0;
  };

  dfs(root);
  return longestDistance;
};
