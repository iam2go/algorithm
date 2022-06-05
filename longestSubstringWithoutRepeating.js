/**
 * 3. Longest Substring Without Repeating Characters
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let maxLength = s.length > 0 ? 1 : 0;
  let display = new Map();
  display.set(s[0], 0);

  for (let i = 1, len = s.length; i < len; i++) {
    let char = s[i];
    if (display.has(char) && display.get(char) >= start) {
      start = display.get(char) + 1;
    } else {
      maxLength = Math.max(maxLength, i - start + 1);
    }
    display.set(char, i);
  }

  return maxLength;
};
