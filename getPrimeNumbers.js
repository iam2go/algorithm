/**
 * k진수에서 소수 개수 구하기
 * @see https://programmers.co.kr/learn/courses/30/lessons/92335
 * @param {number} n
 * @param {number} k
 */
function solution(n, k) {
  const candidates = n.toString(k).split("0");

  const isPrime = (num) => {
    if (!num || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  return candidates.filter((num) => isPrime(+num)).length;
}
