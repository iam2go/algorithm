/**
 * 743. Network Delay Time
 * @see https://leetcode.com/problems/network-delay-time/
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const max = 100 * n + 1;
  let graph = Array.from({ length: n + 1 }, () => []);
  let timeBoard = Array(n + 1).fill(max);
  let visited = new Set();

  const findMinTime = (arr) => {
    return arr.reduce(
      (result, time, index) =>
        result[1] > time && !visited.has(index) ? [index, time] : result,
      [0, max]
    )[0];
  };

  times.forEach(([start, end, time]) => {
    graph[start].push([end, time]);
  });

  timeBoard[k] = 0;

  for (let i = 1; i <= n; i++) {
    const node = findMinTime(timeBoard);
    visited.add(node);
    graph[node].forEach(([index, time]) => {
      if (timeBoard[index] > timeBoard[node] + time) {
        timeBoard[index] = timeBoard[node] + time;
      }
    });
  }

  timeBoard.splice(0, 1);
  return timeBoard.includes(max) ? -1 : Math.max(...timeBoard);
};
