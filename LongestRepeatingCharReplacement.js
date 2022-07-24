/**
 * 424. Longest Repeating Character Replacement
 * @see https://leetcode.com/problems/longest-repeating-character-replacement/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let maxCount = 0,
    left = 0,
    right = 0;
  let counts = {};

  while (right < s.length) {
    const char = s[right];
    counts[char] = (counts[char] || 0) + 1;

    maxCount = Math.max(maxCount, counts[char]);

    if (right - left + 1 > k + maxCount) {
      counts[left] -= 1;
      left++;
    }
    right++;
    console.log(left, right);
  }

  return right - left;
};
