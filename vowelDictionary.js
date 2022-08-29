/**
 * 모음사전
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/84512
 * @param {string} word
 * @returns {number}
 */

function solution(word) {
  const vowel = ["A", "E", "I", "O", "U"];
  let dictionary = [];

  const permute = (str, len) => {
    if (str.length === len) {
      dictionary.push(str);
      return;
    }
    for (let i = 0; i < vowel.length; i++) {
      permute(str + vowel[i], len);
    }
  };

  for (let i = 1; i <= 5; i++) {
    permute("", i);
  }

  dictionary.sort();

  return dictionary.indexOf(word) + 1;
}
