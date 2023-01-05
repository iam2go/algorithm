/**
 * 디펜스 게임
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/142085
 * @param {number} n
 * @param {number} k
 * @param {number[]} enemy
 * @returns {number}
 */
function solution(n, k, enemy) {
  let left = k;
  let right = enemy.length;

  if (right < k) return right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const round = enemy.slice(0, mid).sort((a, b) => b - a);
    const sum = round.reduce((a, b) => a + b, 0);
    const totalDefense = round.slice(0, k).reduce((a, b) => a + b);
    sum - totalDefense > n ? (right = mid - 1) : (left = mid + 1);
  }

  return right;
}
