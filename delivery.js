/**
 * 배달
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/12978
 * @param {number} N
 * @param {number[][]} road
 * @param {number} K
 * @returns {number}
 */
function solution(N, road, K) {
  const MAX_TIME = 500001;
  let roads = Array.from({ length: N + 1 }, () => Array(N + 1).fill(MAX_TIME));
  let elapsedTimes = Array(N + 1).fill(Infinity);
  let visited = new Set();

  road.forEach(([a, b, time]) => {
    if (roads[a][b] > time) {
      roads[a][b] = time;
      roads[b][a] = time;
    }
  });

  const findMinTime = () => {
    return elapsedTimes.reduce(
      (result, time, index) =>
        result[0] > time && !visited.has(index) ? [time, index] : result,
      [MAX_TIME, 0]
    )[1];
  };

  elapsedTimes[1] = 0;

  for (let i = 1; i <= N; i++) {
    const node = findMinTime();
    visited.add(node);
    roads[node].forEach((time, index) => {
      elapsedTimes[index] = Math.min(
        elapsedTimes[index],
        elapsedTimes[node] + time
      );
    });
  }

  return elapsedTimes.filter((time) => time <= K).length;
}
