/**
 * 698. Partition to K Equal Sum Subsets
 * @see https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var canPartitionKSubsets = function (nums, k) {
  const sum = nums.reduce((a, b) => a + b, 0);
  const len = nums.length;
  const target = sum / k;
  let dp = Array(1 << len).fill(-1);

  dp[0] = 0;

  if (sum % k !== 0) return false;
  if (len === 1) return true;

  for (let mask = 0; mask < 1 << len; mask++) {
    if (dp[mask] === -1) continue;

    for (let i = 0; i < len; i++) {
      if ((mask & (1 << i)) === 0 && dp[mask] + nums[i] <= target) {
        dp[mask | (1 << i)] = (dp[mask] + nums[i]) % target;
      }
    }
  }

  return dp[(1 << len) - 1] === 0;
};
