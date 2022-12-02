/**
 * 괄호 회전하기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/76502
 * @param {string} s
 * @returns {number}
 */
function solution(s) {
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const checkRightBrackets = (str) => {
    let stack = [];
    let count = 0;
    for (let bracket of str) {
      if (brackets[bracket]) {
        stack.push(bracket);
        continue;
      }

      if (stack.length === 0 || brackets[stack.pop()] !== bracket) return 0;
      if (stack.length === 0) count++;
    }
    return stack.length === 0 ? count : 0;
  };

  let result = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    const str = s.slice(i) + s.slice(0, i);
    result = checkRightBrackets(str);
    if (result) break;
  }

  return result;
}
