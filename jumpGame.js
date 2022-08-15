/**
 * 55. Jump Game
 * @see https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let movableLen = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (i > movableLen) return false;
    movableLen = Math.max(movableLen, nums[i] + i);
  }
  return true;
};
