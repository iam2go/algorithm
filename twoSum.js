/**
 * 1. Two Sum
 * @see https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let maps = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    const pair = target - nums[i];
    if (maps[pair] !== undefined) {
      return [maps[pair], i];
    }
    maps[nums[i]] = i;
  }
};
