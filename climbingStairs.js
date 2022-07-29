/**
 * 70. Climbing Stairs
 * @see https://leetcode.com/problems/climbing-stairs/submissions/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let result = Array.from({ length: n + 1 }).fill(0);
  result[1] = 1;
  result[2] = 2;

  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
};
