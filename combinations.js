/**
 * 77. Combinations
 * @see https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let results = [];
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  const getCombination = (index, result) => {
    if (result.length === k) {
      results.push(result);
      return;
    }
    for (let i = index; i < n; i++) {
      getCombination(i + 1, result.concat(i + 1));
    }
  };

  getCombination(0, []);
  return results;
};
