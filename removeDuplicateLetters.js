/**
 * 316. Remove Duplicate Letters
 * @see https://leetcode.com/problems/remove-duplicate-letters/
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let count = {};
  let result = [];

  s.split("").forEach((letter) => {
    count[letter] = count[letter] ? ++count[letter] : 1;
  });

  for (let letter of s) {
    count[letter] -= 1;

    if (result.includes(letter)) continue;

    while (result.length > 0 && result[result.length - 1] > letter) {
      if (count[result[result.length - 1]] === 0) break;
      result.pop();
    }
    result.push(letter);
  }

  return result.join("");
};
