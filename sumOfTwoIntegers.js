/**
 * 371. Sum of Two Integers
 * @see https://leetcode.com/problems/sum-of-two-integers/
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while ((a & b) !== 0) {
    let carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};
