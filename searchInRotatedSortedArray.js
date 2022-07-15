/**
 * 33. Search in Rotated Sorted Array
 * @see https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const binarySearch = (left, right) => {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] >= target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && nums[right] >= target) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    return binarySearch(left, right);
  };

  return binarySearch(0, nums.length - 1);
};
