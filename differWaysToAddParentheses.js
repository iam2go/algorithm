/**
 * 241. Different Ways to Add Parentheses
 * @see https://leetcode.com/problems/different-ways-to-add-parentheses/submissions/
 * @param {string} expression
 * @return {number[]}
 */
function isNumber(val) {
  return !isNaN(val);
}

function compute(left, right, op) {
  let result = [];
  left.forEach((value1) => {
    right.forEach((value2) => {
      const answer =
        op === "+"
          ? value1 + value2
          : op === "-"
          ? value1 - value2
          : value1 * value2;
      result.push(answer);
    });
  });

  return result;
}

var diffWaysToCompute = function (expression) {
  if (isNumber(expression)) {
    return [parseInt(expression)];
  }

  let result = [];

  for (let index = 0, len = expression.length; index < len; index++) {
    if ("+-*".includes(expression[index])) {
      const left = diffWaysToCompute(expression.slice(0, index));
      const right = diffWaysToCompute(expression.slice(index + 1));

      result = result.concat(compute(left, right, expression[index]));
    }
  }
  return result;
};
