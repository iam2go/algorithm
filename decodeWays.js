/**
 * 91. Decode Ways
 * @see https://leetcode.com/problems/decode-ways/submissions/
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const LEN = s.length;
  const digits = new Set(
    Array.from({ length: 26 }, (_, i) => (i + 1).toString())
  );
  let dp = Array(LEN + 1).fill(0);
  dp[0] = 1;
  dp[1] = digits.has(s[0]) ? 1 : 0;

  for (let i = 2; i <= LEN; i++) {
    dp[i] += digits.has(s[i - 1]) ? dp[i - 1] : 0;
    dp[i] += digits.has(s.slice(i - 2, i)) ? dp[i - 2] : 0;
  }

  return dp[LEN];
};
