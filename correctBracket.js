/**
 * @param {string[]} s
 * @returns {boolean}
 */

function solution(s) {
  const LEN = s.length;
  if (s[LEN - 1] !== ")") return false;

  let result = 0;
  for (let i = 0; i < LEN; i++) {
    s[i] === "(" ? result++ : result--;
    if (result < 0) return false;
  }
  return result === 0;
}
