/**
 * 등산코스 정하기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/118669
 * @param {number} n
 * @param {number[][]} paths
 * @param {number[]} gates
 * @param {number[]} summits
 * @returns {number[]}
 */

function solution(n, paths, gates, summits) {
  let intensity = Array(n + 1).fill(Infinity);
  let queue = [];
  let graph = Array.from({ length: n + 1 }, () => ({}));

  paths.forEach(([start, end, time]) => {
    graph[start][end] = time;
    graph[end][start] = time;
  });

  // 산봉우리가 최종 도착지
  summits.forEach((summit) => (graph[summit] = {}));

  gates.forEach((gate) => {
    queue.push([gate, 0]);
    intensity[gate] = 0;
  });

  while (queue.length > 0) {
    const [from, time] = queue.shift();

    if (time > intensity[from]) continue;

    for (let _to of Object.keys(graph[from])) {
      let to = parseInt(_to);
      if (intensity[to] > Math.max(graph[from][to], time)) {
        intensity[to] = Math.max(graph[from][to], time);
        queue.push([to, intensity[to]]);
      }
    }
  }

  return summits
    .sort((a, b) => a - b)
    .reduce(
      ([summitNo, minIntensity], summit) => {
        if (intensity[summit] < minIntensity)
          return [summit, intensity[summit]];
        return [summitNo, minIntensity];
      },
      [50001, Infinity]
    );
}
