/**
 * 739. Daily Temperatures
 * @see https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let result = Array(temperatures.length).fill(0);

  temperatures.forEach((temperaure, index) => {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperaure
    ) {
      const target = stack.pop();
      result[target] = index - target;
    }
    stack.push(index);
  });
  return result;
};
