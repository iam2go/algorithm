/**
 * 72. Edit Distance
 * @see https://leetcode.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const LEN = word2.length;
  const dp = Array.from({ length: LEN + 1 }, (_, i) => i);

  for (let i = 1, len = word1.length; i <= len; i++) {
    let prev = i - 1;
    dp[0] = i;
    for (let j = 1; j <= LEN; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        [dp[j], prev] = [prev, dp[j]];
        continue;
      }
      [dp[j], prev] = [Math.min(dp[j - 1], prev, dp[j]) + 1, dp[j]];
    }
  }
  return dp[LEN];
};
