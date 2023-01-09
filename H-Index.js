/**
 * H - Index
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42747
 * @param {number[]} citations
 * @returns {number}
 */
function solution(citations) {
  return citations
    .sort((a, b) => b - a)
    .reduce((result, num, i) => {
      return num >= i + 1 ? result + 1 : result;
    }, 0);
}
