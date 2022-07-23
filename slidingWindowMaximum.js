/**
 * 239. Sliding Window Maximum
 * @see https://leetcode.com/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [];
  let deque = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (deque[0] <= i - k) {
      deque.shift();
    }

    if (i < k - 1) continue;
    result.push(nums[deque[0]]);
  }
  return result;
};
