/**
 * 740. Delete and Earn
 * @see https://leetcode.com/problems/delete-and-earn/
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const MAX = Math.max(...nums);
  const MIN = Math.min(...nums);
  let numArr = Array(MAX - MIN + 1).fill(0);

  nums.forEach((num) => {
    numArr[num - MIN] += num;
  });

  if (numArr.length <= 1) return numArr[0];

  let dp = numArr.slice();
  dp[1] = Math.max(dp[0], dp[1]);

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + dp[i]);
  }

  return dp[dp.length - 1];
};
