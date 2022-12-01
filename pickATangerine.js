/**
 * 귤 고르기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/138476
 * @param {number} k
 * @param {number[]} tangerine
 * @returns
 */

function solution(k, tangerine) {
  const tangerines = {};
  tangerine.forEach((size) => {
    tangerines[size] = (tangerines[size] || 0) + 1;
  });

  const numOfTangerine = Object.values(tangerines).sort((a, b) => b - a);

  let kind = 0;
  for (let count of numOfTangerine) {
    if (k <= 0) break;
    kind++;
    k -= count;
  }
  return kind;
}
