/**
 * 42. Trapping Rain Water
 * @see https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  let leftMax = height[leftIndex];
  let rightMax = height[rightIndex];

  let totalRainWater = 0;

  while (leftIndex < rightIndex) {
    if (leftMax <= rightMax) {
      leftIndex++;
      if (leftMax > height[leftIndex]) {
        totalRainWater += leftMax - height[leftIndex];
      } else {
        leftMax = height[leftIndex];
      }
    } else {
      rightIndex--;
      if (rightMax > height[rightIndex]) {
        totalRainWater += rightMax - height[rightIndex];
      } else {
        rightMax = height[rightIndex];
      }
    }
  }

  return totalRainWater;
};
