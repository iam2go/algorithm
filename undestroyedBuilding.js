/**
 * 파괴되지 않은 건물
 * @see https://programmers.co.kr/learn/courses/30/lessons/92344
 * @param {number[][]} board
 * @param {number[][]} skill
 * @returns {number}
 */

function solution(board, skill) {
  const N = board.length;
  const M = board[0].length;
  let newBoard = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    const _degree = type === 1 ? -degree : degree;
    newBoard[r1][c1] += _degree;
    newBoard[r1][c2 + 1] -= _degree;
    newBoard[r2 + 1][c1] -= _degree;
    newBoard[r2 + 1][c2 + 1] += _degree;
  });

  for (let j = 0; j <= M; j++) {
    for (let i = 1; i <= N; i++) {
      newBoard[i][j] += newBoard[i - 1][j];
    }
  }

  for (let i = 0; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      newBoard[i][j] += newBoard[i][j - 1];
    }
  }

  return board.reduce(
    (result, row, i) =>
      result +
      row.reduce(
        (count, value, j) => (value + newBoard[i][j] > 0 ? count + 1 : count),
        0
      ),
    0
  );
}
