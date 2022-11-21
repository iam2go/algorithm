/**
 * 210. Course Schedule II
 * @see https://leetcode.com/problems/course-schedule-ii/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let graph = Array.from({ length: numCourses }, () => []);
  let indegree = Array.from({ length: numCourses }, () => 0);

  prerequisites.forEach(([to, before]) => {
    graph[before].push(to);
    indegree[to]++;
  });

  let queue = [];
  let result = [];

  indegree.forEach((value, num) => {
    if (value === 0) {
      queue.push(num);
    }
  });

  while (queue.length > 0) {
    const num = queue.pop();
    result.push(num);

    graph[num].forEach((to) => {
      indegree[to]--;
      if (indegree[to] === 0) {
        queue.push(to);
      }
    });
  }

  return result.length === numCourses ? result : [];
};
