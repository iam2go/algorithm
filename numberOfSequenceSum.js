/**
 * 연속 부분 수열 합의 개수
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/131701
 * @param {number[]} elements
 * @returns number
 */
function solution(elements) {
  const len = elements.length;
  const sum = new Set();
  let arr = new Array(len).fill(0);

  for (let i = 1; i <= len; i++) {
    const prev = arr[0];
    elements.forEach((num, index) => {
      arr[index] = num + (index === len - 1 ? prev : arr[index + 1]);
      sum.add(arr[index]);
    });
  }

  return sum.size;
}
