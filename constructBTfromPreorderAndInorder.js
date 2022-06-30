/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * @see https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preIndex = 0;
  const dfs = (left, right) => {
    if (left > right) return null;

    const value = preorder[preIndex++];
    const middle = inorder.indexOf(value);

    const node = new TreeNode(value);
    node.left = dfs(left, middle - 1);
    node.right = dfs(middle + 1, right);

    return node;
  };
  return dfs(0, preorder.length - 1);
};
