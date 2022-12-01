/**
 * 혼자 놀기의 달인
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/131130
 * @param {number[]} cards
 * @returns {number}
 */

function solution(cards) {
  const NUM_OF_CARD = cards.length;
  let checkRemain = Array(cards.length).fill(true);

  const openBox = (start) => {
    if (!checkRemain[start]) return 0;

    let boxCount = 0;
    let index = start;

    while (checkRemain[index]) {
      checkRemain[index] = false;
      index = cards[index] - 1;
      boxCount++;
    }
    return boxCount;
  };

  let round = [0];
  for (let i = 0; i < NUM_OF_CARD; i++) {
    const boxCount = openBox(i);
    if (boxCount > 0) {
      round.push(boxCount);
    }
  }

  round.sort((a, b) => b - a);
  return round[0] * round[1];
}
