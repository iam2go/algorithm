/**
 * 310. Minimum Height Trees
 * @see https://leetcode.com/problems/minimum-height-trees/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  let graph = Array.from({ length: n }, () => []);
  let count = n;

  if (n < 2) return [0];

  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  let leaves = [];
  graph.forEach((nodes, index) => {
    if (nodes.length === 1) {
      leaves.push(index);
    }
  });

  while (count > 2) {
    let nextLeaves = [];
    leaves.forEach((index) => {
      const node = graph[index].pop();
      graph[node].splice(graph[node].indexOf(index), 1);
      graph[node].length === 1 && nextLeaves.push(node);
      count--;
    });
    leaves = nextLeaves;
  }

  return leaves;
};
