/**
 * 973. K Closest Points to Origin
 * @see https://leetcode.com/problems/k-closest-points-to-origin/
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const getDistance = ([x, y]) => Math.sqrt(x * x + y * y);
  return points.sort((a, b) => getDistance(a) - getDistance(b)).slice(0, k);
};
