/**
 * 329. Longest Increasing Path in a Matrix
 * @see https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 * @param {number[][]} matrix
 * @return {number}
 */

var longestIncreasingPath = function (matrix) {
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const m = matrix.length;
  const n = matrix[0].length;

  const checkValidLocation = (x, y) => x >= 0 && y >= 0 && x < m && y < n;

  let countArray = Array.from({ length: m }, () => Array(n).fill(0));
  const dfs = (x, y, value) => {
    let max = 1;
    console.log(value);
    if (countArray[x][y] !== 0) return countArray[x][y];
    direction.forEach(([mx, my]) => {
      if (
        checkValidLocation(x + mx, y + my) &&
        value < matrix[x + mx][y + my]
      ) {
        countArray[x][y] = Math.max(
          countArray[x][y],
          dfs(x + mx, y + my, matrix[x + mx][y + my]) + 1
        );
        max = Math.max(countArray[x][y], max);
      }
    });
    return max;
  };
  let maxLength = 1;
  matrix.forEach((row, x) => {
    row.forEach((value, y) => {
      maxLength = Math.max(maxLength, dfs(x, y, value));
    });
  });

  return maxLength;
};
