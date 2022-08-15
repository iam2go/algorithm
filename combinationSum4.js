/**
 * 377. Combination Sum IV
 * @see https://leetcode.com/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for (let t = 1; t <= target; t++) {
    for (let num of nums) {
      if (num > t) continue;
      dp[t] += dp[t - num];
    }
  }
  return dp[target];
};
