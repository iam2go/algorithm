/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 108. Convert Sorted Array to Binary Search Tree
 * @see https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  let index = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[index]);

  root.left = sortedArrayToBST(nums.slice(0, index));
  root.right = sortedArrayToBST(nums.slice(index + 1));

  return root;
};
