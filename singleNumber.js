/**
 * 136. Single Number
 * @see https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((result, num) => (result ^= num), 0);
};
