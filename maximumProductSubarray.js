/**
 * 152. Maximum Product Subarray
 * @see https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];

  for (let index = 1, len = nums.length; index < len; index++) {
    let prevMin = min;
    min = Math.min(min * nums[index], max * nums[index], nums[index]);
    max = Math.max(prevMin * nums[index], max * nums[index], nums[index]);
    result = Math.max(result, max);
  }

  return result;
};
