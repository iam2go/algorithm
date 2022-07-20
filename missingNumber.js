/**
 * 268. Missing Number
 * @see https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let check = Array(nums.length + 1).fill(-1);
  nums.forEach((num) => {
    check[num] = num;
  });
  return check.indexOf(-1);
};
