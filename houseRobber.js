/**
 * 198. House Robber
 * @see https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let totalAmount = [nums[0]];

  for (let index = 1, len = nums.length; index < len; index++) {
    if (index === 1) {
      totalAmount.push(Math.max(nums[0], nums[1]));
      continue;
    }
    totalAmount.push(
      Math.max(totalAmount[index - 1], totalAmount[index - 2] + nums[index])
    );
  }

  return totalAmount[nums.length - 1];
};
