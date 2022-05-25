/**
 * 238. Product of Array Except Self
 * @see https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let output = [];

  nums.reduce((result, num, i) => {
    output[i] = result;
    return result * num;
  }, 1);

  nums.reduceRight((result, num, i) => {
    output[i] *= result;
    return result * num;
  }, 1);

  return output;
};
