/**
 * 1049. Last Stone Weight II
 * @see https://leetcode.com/problems/last-stone-weight-ii/
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const sum = stones.reduce((a, b) => a + b, 0);
  const halfSum = Math.floor(sum / 2);
  let dp = Array(halfSum + 1).fill(false);

  dp[0] = true;

  for (let stone of stones) {
    for (let j = halfSum; j >= stone; j--) {
      dp[j] = dp[j] || dp[j - stone];
    }
  }

  for (let i = halfSum; i > 0; i--) {
    if (dp[i]) return sum - i * 2;
  }
  return sum;
};
