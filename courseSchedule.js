/**
 * 207. Course Schedule
 * @see https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let graph = Array.from({ length: numCourses }, () => []);
  let visited = new Set();
  let traced = new Set();

  prerequisites.forEach(([from, to]) => {
    graph[from].push(to);
  });

  const dfs = (node) => {
    if (traced.has(node)) return false;
    if (visited.has(node)) return true;

    traced.add(node);
    for (let next of graph[node]) {
      if (!dfs(next)) return false;
    }

    traced.delete(node);
    visited.add(node);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};
