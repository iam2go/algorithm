/**
 * 숫자 문자열과 영단어
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/81301
 * @param {string} s
 * @returns {number}
 */
function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return +numbers.reduce(
    (result, word, number) => result.replace(new RegExp(word, "g"), number),
    s
  );
}
