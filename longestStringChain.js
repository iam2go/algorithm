/**
 * 1048. Longest String Chain
 * @see https://leetcode.com/problems/longest-string-chain/
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  let LEN = words.length;
  let dp = Array(LEN).fill(1);
  words.sort((a, b) => a.length - b.length);

  for (let i = 0; i < LEN; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const word = words[i].slice(0, j) + words[i].slice(j + 1);
      const index = words.indexOf(word);
      if (index >= 0) {
        dp[i] = Math.max(dp[index] + 1, dp[i]);
      }
    }
  }
  return Math.max(...dp);
};
