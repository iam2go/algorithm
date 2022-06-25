/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 572. Subtree of Another Tree
 * @see https://leetcode.com/problems/subtree-of-another-tree/
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const serializedTree = (root) => {
    let result = [];
    const getSerialized = (node) => {
      if (!node) {
        result.push("null");
        return;
      }

      result.push(node.val);
      getSerialized(node.left);
      getSerialized(node.right);
    };
    getSerialized(root);
    return "/" + result.join("/");
  };

  return serializedTree(root).includes(serializedTree(subRoot));
};
