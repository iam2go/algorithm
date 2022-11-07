/**
 * [프로그래머스] 게임 맴 최단거리
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/1844
 * @param {number[][]} maps
 * @returns number
 */

function solution(maps) {
  const M = maps.length;
  const N = maps.length;

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let queue = [[0, 0]];

  const checkValidation = (x, y) => x >= 0 && y >= 0 && x < M && y < N;

  while (queue.length) {
    const [curX, curY] = queue.shift();

    if (curX === M - 1 && curY === N - 1) return maps[M - 1][N - 1];

    direction.forEach(([x, y]) => {
      const nextX = curX + x;
      const nextY = curY + y;
      if (checkValidation(nextX, nextY) && maps[nextX][nextY] === 1) {
        maps[nextX][nextY] = maps[curX][curY] + 1;
        queue.push([nextX, nextY]);
      }
    });
  }
}
