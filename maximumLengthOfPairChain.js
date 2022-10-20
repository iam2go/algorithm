/**
 * 646. Maximum Length of Pair Chain
 * @see https://leetcode.com/problems/maximum-length-of-pair-chain/
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);

  let maxLen = 1;
  let prev = pairs[0];

  for (let pair of pairs) {
    if (prev[1] < pair[0]) {
      maxLen++;
      prev = pair;
    }
  }
  return maxLen;
};
