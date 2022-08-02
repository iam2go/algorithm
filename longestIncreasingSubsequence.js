/**
 * 300. Longest Increasing Subsequence
 * @see https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let LEN = nums.length;
  let dp = Array(LEN).fill(1);

  for (let i = 0; i < LEN; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};
