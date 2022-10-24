/**
 * 416. Partition Equal Subset Sum
 * @see https://leetcode.com/problems/partition-equal-subset-sum/
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b);

  if (sum % 2 !== 0) return false;

  let dp = Array(sum / 2 + 1).fill(false);
  dp[0] = true;

  for (let index = 0, len = nums.length; index < len; index++) {
    for (let j = sum / 2; j > 0; j--) {
      if (j < nums[index]) break;
      dp[j] = dp[j] || dp[j - nums[index]];
    }
  }
  return dp[sum / 2];
};
