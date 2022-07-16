/**
 * 167. Two Sum II - Input Array Is Sorted
 * @see https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum > target) {
      right--;
      continue;
    }
    if (sum < target) {
      left++;
      continue;
    }
    return [left + 1, right + 1];
  }
};
