/**
 * 1314. Matrix Block Sum
 * @see https://leetcode.com/problems/matrix-block-sum/description/
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  let M = mat.length;
  let N = mat[0].length;
  let sum = Array.from({ length: M + 1 }, () => Array(N + 1).fill(0));

  const getRangeSum = (x, y, k) => {
    const maxX = Math.min(x + k, M);
    const minX = Math.max(x - k, 1);
    const maxY = Math.min(y + k, N);
    const minY = Math.max(y - k, 1);
    return (
      sum[maxX][maxY] -
      sum[maxX][minY - 1] -
      sum[minX - 1][maxY] +
      sum[minX - 1][minY - 1]
    );
  };

  for (let i = 1; i <= M; i++) {
    for (let j = 1; j <= N; j++) {
      sum[i][j] =
        sum[i - 1][j] + sum[i][j - 1] + mat[i - 1][j - 1] - sum[i - 1][j - 1];
    }
  }

  return mat.map((row, x) => row.map((num, y) => getRangeSum(x + 1, y + 1, k)));
};
