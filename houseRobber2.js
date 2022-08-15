/**
 * 213. House Robber II
 * @see https://leetcode.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const LEN = nums.length;
  let result1 = [nums[0]];
  let result2 = [0, nums[1]];

  for (let i = 1; i < LEN - 1; i++) {
    result1[i] = Math.max((result1[i - 2] || 0) + nums[i], result1[i - 1]);
  }

  for (let i = 2; i < LEN; i++) {
    result2[i] = Math.max(result2[i - 2] + nums[i], result2[i - 1]);
  }

  return Math.max(result1.pop(), result2.pop());
};
