/**
 * 할인 행사
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/131127
 * @param {string[]} want
 * @param {number[]} number
 * @param {string[]} discount
 * @returns {number}
 */

function solution(want, number, discount) {
  const wantMap = want.reduce((map, thing, index) => {
    map[thing] = number[index];
    return map;
  }, {});

  discount.slice(0, 10).forEach((thing) => {
    if (want.includes(thing)) {
      wantMap[thing] -= 1;
    }
  });

  let count = Object.values(wantMap).every((num) => num <= 0) ? 1 : 0;

  for (let start = 0, len = discount.length; start < len - 10; start++) {
    if (want.includes(discount[start])) {
      wantMap[discount[start]] += 1;
    }

    if (want.includes(discount[start + 10])) {
      wantMap[discount[start + 10]] -= 1;
    }

    if (Object.values(wantMap).every((num) => num <= 0)) {
      count++;
    }
  }
  return count;
}
