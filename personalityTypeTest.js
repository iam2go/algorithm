/**
 * 성격 유형 검사하기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/118666
 * @param {string[]} survey
 * @param {number[]} choices
 * @returns {string}
 */

function solution(survey, choices) {
  const types = {};
  const result = ["RT", "CF", "JM", "AN"];
  result.forEach((indicator) => {
    types[indicator[0]] = 0;
    types[indicator[1]] = 0;
  });

  choices.forEach((choice, i) => {
    if (choice !== 4) {
      const type = survey[i][choice > 4 ? 1 : 0];
      const score = choice < 4 ? 4 - choice : choice - 4;
      types[type] += score;
    }
  });

  return result.reduce((result, indicator) => {
    if (types[indicator[1]] > types[indicator[0]]) {
      return result + indicator[1];
    }
    return result + indicator[0];
  }, "");
}
