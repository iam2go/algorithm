/**
 * 
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/12913
 * @param {number[][]} land 
 * @returns {number}
 */
function solution(land) {
  let result = land[0].slice();

  const getMaxValue = (except, values) => {
    const _values = values.slice();
    _values.splice(except, 1);
    return Math.max(..._values);
  };

  for (let row = 1, len = land.length; row < len; row++) {
    result = result.map((_, index) =>  land[row][index] + getMaxValue(index, result)
  }

  return Math.max(...result);
}
