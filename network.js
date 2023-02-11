/**
 * 네트워크
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/43162
 * @param {number} n
 * @param {number[][]} computers
 * @returns {number}
 */
function solution(n, computers) {
  let count = 0;
  let check = new Set();

  const dfs = (computers, index) => {
    check.add(index);
    computers[index].forEach((connect, i) => {
      if (connect && !check.has(i)) {
        dfs(computers, i);
      }
    });
  };

  computers.forEach((computer, i) => {
    if (!check.has(i)) {
      dfs(computers, i);
      count++;
    }
  });
  return count;
}
