/**
 * 771. Jewels and Stones
 * @see https://leetcode.com/problems/jewels-and-stones/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let numberOfStones = {};
  let count = 0;

  for (let stone of stones) {
    const count = numberOfStones[stone] || 0;
    numberOfStones[stone] = count + 1;
  }

  for (let jewel of jewels) {
    if (numberOfStones[jewel]) {
      count += numberOfStones[jewel];
    }
  }

  return count;
};
