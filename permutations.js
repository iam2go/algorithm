/**
 * 46. Permutations
 * @see https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let results = [];
  const gerPermutations = (arr, result) => {
    const len = arr.length;
    if (len === 0) {
      results.push(result);
      return;
    }

    for (let i = 0; i < len; i++) {
      let _arr = arr.slice();
      let num = _arr.splice(i, 1);
      gerPermutations(_arr, result.concat(num));
    }
  };

  gerPermutations(nums, []);
  return results;
};
