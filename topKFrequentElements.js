/**
 * 347. Top K Frequent Elements
 * @see https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const countByNums = nums.reduce((countByNums, num) => {
    const count = countByNums[num] || 0;
    countByNums[num] = count + 1;
    return countByNums;
  }, {});
  return Object.keys(countByNums)
    .sort((a, b) => countByNums[b] - countByNums[a])
    .slice(0, k);
};
