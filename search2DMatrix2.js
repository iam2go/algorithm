/**
 * 240. Search a 2D Matrix II
 * @see https://leetcode.com/problems/search-a-2d-matrix-ii/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = 0,
    col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return true;

    if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
};
