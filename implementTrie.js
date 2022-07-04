/**
 * 208. Implement Trie (Prefix Tree)
 * @see https://leetcode.com/problems/implement-trie-prefix-tree/
 */

class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.isWord = true;
  }
  searchNode(word) {
    let node = this.root;
    for (let char of word) {
      node = node[char];
      if (!node) return null;
    }
    return node;
  }
  search(word) {
    const node = this.searchNode(word);
    return node !== null && node.isWord === true;
  }
  startsWith(prefix) {
    return this.searchNode(prefix) !== null;
  }
}
