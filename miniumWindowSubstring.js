/**
 * 76. Minimum Window Substring
 * @see https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0,
    right = 0;
  let target = {};
  let count = 0;
  let result = "";

  for (let char of t) {
    target[char] = (target[char] || 0) + 1;
  }

  count = Object.values(target).reduce((a, b) => a + b);

  for (let right = 0, len = s.length; right < len; right++) {
    const char = s[right];
    if (target[char] !== undefined) {
      target[char] -= 1;
      target[char] >= 0 && count--;
    }

    while (
      left < right &&
      (target[s[left]] === undefined || target[s[left]] < 0)
    ) {
      if (target[s[left]] !== undefined) {
        target[s[left]] += 1;
      }
      left++;
    }

    if (count <= 0) {
      let window = s.slice(left, right + 1);
      if (!result.length || result.length > window.length) {
        result = window;
      }
    }
  }
  return result;
};
