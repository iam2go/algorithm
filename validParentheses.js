/**
 * 20. Valid Parentheses
 * @see https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (let parenthese of s) {
    if (!pair[parenthese]) {
      stack.push(parenthese);
    } else {
      if (pair[parenthese] !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
};
