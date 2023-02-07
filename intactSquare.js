/**
 * 멀쩡한 사각형
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/62048
 * @param {number} w
 * @param {number} h
 * @returns {number}
 */
function solution(w, h) {
  const gcd = (a, b) => {
    const remain = a % b;
    return remain === 0 ? b : gcd(Math.max(b, remain), Math.min(b, remain));
  };
  return w * h - (w + h - gcd(Math.max(w, h), Math.min(w, h)));
}
