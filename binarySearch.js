/**
 * 704. Binary Search
 * @see https://leetcode.com/problems/binary-search/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const binarySearch = (left, right) => {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    return nums[mid] < target
      ? binarySearch(mid + 1, right)
      : binarySearch(left, mid - 1);
  };

  return binarySearch(0, nums.length);
};
