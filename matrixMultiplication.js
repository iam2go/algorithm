/**
 * 행렬의 곱셈
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/12949
 * @param {number[][]} arr1
 * @param {number[][]} arr2
 * @returns {number[][]}
 */
function solution(arr1, arr2) {
  const m = arr1.length;
  const n = arr2[0].length;
  let result = Array.from({ length: m }, () => Array(n).fill(0));
  arr1.forEach((row, i) => {
    row.forEach((num1, j) => {
      arr2[j].forEach((num2, k) => {
        result[i][k] += num1 * num2;
      });
    });
  });
  return result;
}
