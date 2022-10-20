/**
 * 673. Number of Longest Increasing Subsequence
 * @see https://leetcode.com/problems/number-of-longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const LEN = nums.length;
  let dp = Array(LEN).fill(1);
  let count = Array(LEN).fill(1);

  for (let i = 0; i < LEN; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] <= nums[j]) continue;

      if (dp[j] + 1 > dp[i]) {
        count[i] = count[j];
        dp[i] = dp[j] + 1;
        continue;
      }

      if (dp[j] + 1 === dp[i]) {
        count[i] += count[j];
      }
    }
  }

  const maxLength = Math.max(...dp);
  return count.reduce(
    (result, num, index) => (dp[index] === maxLength ? result + num : result),
    0
  );
};
