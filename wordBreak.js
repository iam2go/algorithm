/**
 * 139. Word Break
 * @see https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dictionary = new Set(wordDict);

  const LEN = s.length;
  let dp = Array(LEN + 1).fill(false);
  dp[0] = true;

  for (let start = 0; start < LEN; start++) {
    if (!dp[start]) continue;
    for (let end = start + 1; end <= LEN; end++) {
      if (dictionary.has(s.slice(start, end))) {
        dp[end] = true;
      }
    }
  }

  return dp[LEN];
};
