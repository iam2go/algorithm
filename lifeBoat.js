/**
 * 구명보트
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42885
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */

function solution(people, limit) {
  people.sort((a, b) => b - a);

  let count = 0;
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) {
      j--;
    }
    count++;
  }
  return count;
}
