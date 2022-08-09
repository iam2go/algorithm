/**
 * 1143. Longest Common Subsequence
 * @see https://leetcode.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const LEN1 = text1.length;
  const LEN2 = text2.length;
  let dp = Array.from({ length: LEN1 + 1 }, () => Array(LEN2 + 1).fill(0));

  for (let i = 1; i <= LEN1; i++) {
    for (let j = 1; j <= LEN2; j++) {
      dp[i][j] =
        text1[i - 1] === text2[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[LEN1][LEN2];
};
