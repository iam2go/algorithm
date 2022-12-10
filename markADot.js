/**
 * 점 찍기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/140107
 * @param {number} k
 * @param {number} d
 * @returns {number}
 */
function solution(k, d) {
  let count = 0;
  for (let x = 0; x <= d; x += k) {
    const maxY = Math.floor(Math.sqrt(d ** 2 - x ** 2));
    count += Math.floor(maxY / k) + 1;
  }
  return count;
}
