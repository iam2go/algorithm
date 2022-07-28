/**
 * 169. Majority Element
 * @see https://leetcode.com/problems/majority-element/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};
