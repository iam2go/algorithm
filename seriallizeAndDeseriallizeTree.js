/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * 297. Serialize and Deserialize Binary Tree
 * @see https://leetcode.com/problems/serialize-and-deserialize-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let result = [];

  const serializedTree = (node) => {
    if (!node) {
      result.push("null");
      return;
    }

    result.push(node.val);
    serializedTree(node.left);
    serializedTree(node.right);
  };

  serializedTree(root);
  return result.join("/");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "null") return null;

  let values = data.split("/");

  let index = -1;

  const deserializedTree = () => {
    if (index >= values.length) return null;

    index++;
    const value = values[index];
    if (value === "null") return null;

    const node = new TreeNode(values[index]);
    node.left = deserializedTree();
    node.right = deserializedTree();
    return node;
  };

  return deserializedTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
