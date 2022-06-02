/**
 * 양과 늑대
 * @see https://programmers.co.kr/learn/courses/30/lessons/92343
 * @param {number[]} info
 * @param {number[][]} edges
 */

function solution(info, edges) {
  let graph = Array.from({ length: info.length }, () => []);
  edges.forEach(([from, to]) => {
    graph[from].push(to);
  });

  let sheepCount = 1;

  const collectSheep = (node, sheep, wolf, nextNodes) => {
    info[node] ? wolf++ : sheep++;

    if (sheep > sheepCount) sheepCount = sheep;
    if (wolf >= sheep) return;

    for (let i = 0, len = nextNodes.length; i < len; i++) {
      let _nextNodes = nextNodes.slice();
      _nextNodes.splice(i, 1);
      collectSheep(
        nextNodes[i],
        sheep,
        wolf,
        _nextNodes.concat(graph[nextNodes[i]])
      );
    }
  };

  collectSheep(0, 0, 0, graph[0]);

  return sheepCount;
}
