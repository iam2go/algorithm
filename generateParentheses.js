/**
 * 22. Generate Parentheses
 * @see https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  const generate = (parenthesis, open, close) => {
    if (open > n || close > n || open < close) return;
    if (open === n && close === n) {
      result.push(parenthesis);
      return;
    }
    generate(parenthesis + "(", open + 1, close);
    generate(parenthesis + ")", open, close + 1);
  };
  generate("", 0, 0);
  return result;
};
