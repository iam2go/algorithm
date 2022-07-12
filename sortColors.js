/**
 * 75. Sort Colors
 * @see https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const [RED, WHITE, BLUE] = [0, 1, 2];
  let red = (white = 0);
  let blue = nums.length;

  while (white < blue) {
    if (nums[white] === RED) {
      [nums[red], nums[white]] = [nums[white], nums[red]];
      red++;
      white++;
      continue;
    }
    if (nums[white] === BLUE) {
      blue--;
      [nums[blue], nums[white]] = [nums[white], nums[blue]];
      continue;
    }
    white++;
  }
  return nums;
};
