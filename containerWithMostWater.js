/**
 * 11. Container With Most Water
 * @see https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let maxAmount = 0;

  while (left < right) {
    let amount = (right - left) * Math.min(height[left], height[right]);
    maxAmount = Math.max(maxAmount, amount);

    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxAmount;
};
