/**
 * 51. N-Queens
 * @see https://leetcode.com/problems/n-queens/
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let answer = [];
  let visited = Array.from({ length: n }, () => Array(n).fill(false));

  const deepClone = (arr) => arr.map((row) => [...row]);
  const checkVisit = (arr, x, y) => {
    for (let i = 0; i < n; i++) {
      arr[i][y] = true;
    }

    for (let j = 0; j < n; j++) {
      arr[x][j] = true;
    }

    for (let z = 0; z < n; z++) {
      if (x + z >= n) break;
      if (y + z < n) {
        arr[x + z][y + z] = true;
      }
      if (y - z >= 0) {
        arr[x + z][y - z] = true;
      }
    }
    return arr;
  };

  const placeQueen = (board, visited) => {
    let str = ".".repeat(n).split("");
    let row = board.length;
    if (row >= n) {
      answer.push(board);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (visited[row][col]) continue;

      str[col] = "Q";
      const _visited = checkVisit(deepClone(visited), row, col);
      placeQueen(board.concat(str.join("")), _visited);
      str[col] = ".";
    }
  };

  placeQueen([], visited);
  return answer;
};
