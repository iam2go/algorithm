/**
 * 78. Subsets
 * @see https://leetcode.com/problems/subsets/submissions/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const length = nums.length;
  let results = [];

  const getSubset = (index, result) => {
    results.push(result);
    for (let i = index; i < length; i++) {
      getSubset(i + 1, result.concat(nums[i]));
    }
  };
  getSubset(0, []);
  return results;
};
