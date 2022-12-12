/**
 * 숫자 카드 나누기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/135807
 * @param {number[]} arrayA
 * @param {number[]} arrayB
 * @returns {number}
 */

function solution(arrayA, arrayB) {
  const getDivisor = (num) => {
    let divisors = [num];
    for (let i = 2; i <= num / 2; i++) {
      if (num % i !== 0) continue;
      divisors.push(i);
    }
    return divisors.sort((a, b) => b - a);
  };

  const getA = (arrA, arrB) => {
    arrA.sort((a, b) => a - b);
    const divisors = getDivisor(arrA[0]);
    for (let divisor of divisors) {
      if (
        arrA.every((num) => num % divisor === 0) &&
        arrB.every((num) => num % divisor !== 0)
      ) {
        return divisor;
      }
    }
    return 0;
  };

  return Math.max(getA(arrayA, arrayB), getA(arrayB, arrayA));
}
