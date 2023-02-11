/**
 * 단어 변환
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/43163
 * @param {string} begin
 * @param {string} target
 * @param {string[]} words
 * @returns {number}
 */

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let visited = new Set();
  let queue = [[begin, 0]];

  const check = (from, to) => {
    let diff = 0;
    from.split("").forEach((s, i) => {
      if (s !== to[i]) diff++;
    });
    return diff === 1;
  };

  while (queue.length > 0) {
    const [word, count] = queue.shift();
    if (word === target) return count;

    words.forEach((next) => {
      if (!visited.has(next) && check(word, next)) {
        queue.push([next, count + 1]);
      }
    });
  }

  return 0;
}
