/**
 * 5. Longest Palindromic Substring
 * @see https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";

  const expend = (left, right, len) => {
    while (left >= 0 && right < len && s[left] === s[right]) {
      left -= 1;
      right += 1;
    }
    return s.slice(left + 1, right);
  };

  for (let i = 0, len = s.length; i < len; i++) {
    let oddResult = expend(i, i + 2, len);
    let evenResult = expend(i, i + 1, len);

    result = oddResult.length > result.length ? oddResult : result;
    result = evenResult.length > result.length ? evenResult : result;
  }

  return result;
};
