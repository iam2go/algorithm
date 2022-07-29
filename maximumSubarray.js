/**
 * 53. Maximum Subarray
 * @see https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sums = [nums[0]];
  for (let index = 1, len = nums.length; index < len; index++) {
    if (sums[index - 1] > 0) {
      sums.push(sums[index - 1] + nums[index]);
      continue;
    }

    sums.push(nums[index]);
  }
  return Math.max(...sums);
};
