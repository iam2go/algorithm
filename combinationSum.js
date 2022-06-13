/**
 * 39. Combination Sum
 * @see https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let results = [];
  let len = candidates.length;
  const getCombination = (index, sum, result) => {
    if (sum > target) return;
    if (sum === target) {
      results.push(result);
      return;
    }

    for (let i = index; i < len; i++) {
      getCombination(i, sum + candidates[i], result.concat(candidates[i]));
    }
  };

  getCombination(0, 0, []);
  return results;
};
