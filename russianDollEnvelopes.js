/**
 * 354. Russian Doll Envelopes
 * @see https://leetcode.com/problems/russian-doll-envelopes/
 * @param {number[][]} envelopes
 * @return {number}
 */

var maxzEnvelopes = function (envelopes) {
  if (envelopes.length < 2) return envelopes.length;
  envelopes.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
  });

  let dp = Array(envelopes.length).fill(1);
  let result = 0;

  for (let envelope of envelopes) {
    let left = 0;
    let right = result;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      dp[mid] < envelope[1] ? (left = mid + 1) : (right = mid);
    }

    dp[left] = envelope[1];
    if (left === result) result++;
  }
  return result;
};
