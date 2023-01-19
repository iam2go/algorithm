/**
 * 큰 수 만들기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42883
 * @param {string} number
 * @param {number} k
 * @returns {string}
 */
function solution(number, k) {
  const getIndexOfBiggestNumber = (str) => {
    for (let num = 9; num >= 0; num--) {
      if (str.includes(String(num))) return str.indexOf(String(num));
    }
  };

  let answer = "";
  let str = number;
  while (str.length > k) {
    if (k <= 0) {
      answer += str;
      break;
    }
    const index = getIndexOfBiggestNumber(str.slice(0, k + 1));
    answer += str[index];
    str = str.slice(index + 1);
    k -= index;
  }

  return answer;
}
