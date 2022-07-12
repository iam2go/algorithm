/**
 * 179. Largest Number
 * @see https://leetcode.com/problems/largest-number/submissions/
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  return nums
    .sort((a, b) => {
      return a + "" + b < b + "" + a ? 1 : -1;
    })
    .join("")
    .replace(/^0+/, "0");
};
