/**
 * 200. Number of Islands
 * @see https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let M = grid.length;
  let N = grid[0].length;

  let count = 0;

  const checkInvalidLocation = (i, j) => i < 0 || i >= M || j < 0 || j >= N;
  const checkIsland = (i, j) => {
    if (checkInvalidLocation(i, j) || grid[i][j] === "0") return;
    grid[i][j] = "0";

    checkIsland(i - 1, j);
    checkIsland(i, j - 1);
    checkIsland(i + 1, j);
    checkIsland(i, j + 1);
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === "0") continue;
      checkIsland(i, j);
      count++;
    }
  }

  return count;
};
