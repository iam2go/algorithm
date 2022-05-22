/**
 * 819. Most Common Word
 * @see https://leetcode.com/problems/most-common-word/
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

var mostCommonWord = function (paragraph, banned) {
  const words = paragraph.replace(/[^\w]/g, " ").toLowerCase().split(" ");
  let wordsCount = words.reduce((result, word) => {
    if (word === "" || banned.includes(word)) return result;
    const count = result[word] || 0;
    return { ...result, [word]: count + 1 };
  }, {});

  return Object.entries(wordsCount).sort(([, a], [, b]) => b - a)[0][0];
};
