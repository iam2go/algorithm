/**
 * 787. Cheapest Flights Within K Stops
 * @see https://leetcode.com/problems/cheapest-flights-within-k-stops/submissions/
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let graph = {};
  let visited = new Set();

  flights.forEach(([from, to, cost]) => {
    const nodes = graph[from] || [];
    nodes.push([to, cost]);
    graph[from] = nodes;
  });

  const queue = [[0, src, k]];

  while (queue.length) {
    queue.sort((a, b) => a[0] - b[0]);

    const [cost, city, count] = queue.shift();
    visited.add(city);

    if (city === dst) return cost;
    if (count < 0 || !graph[city]) continue;
    console.log(graph[city]);
    for (let [nextCity, nextCost] of graph[city]) {
      if (visited.has(nextCity)) continue;
      queue.push([cost + nextCost, nextCity, count - 1]);
    }
  }
  return -1;
};
