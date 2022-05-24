/**
 * 15. 3Sum
 * @see https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];

  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      if (nums[left] + nums[right] + nums[i] === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else {
        nums[left] + nums[right] + nums[i] > 0 ? right-- : left++;
      }
    }
  }
  return result;
};
