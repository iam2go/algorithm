/**
 * 거리두기 확인하기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/81302
 * @param {string[]} places
 * @returns {number[]}
 */
function solution(places) {
  const SIZE = 5;
  const move = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  const isValid = (x, y) => x >= 0 && y >= 0 && x < SIZE && y < SIZE;
  const checkNumberOfSeat = (type, numOfSeat) =>
    type === "P" ? numOfSeat > 0 : numOfSeat > 1;
  const checkDistancing = (place) => {
    for (let x = 0; x < SIZE; x++) {
      for (let y = 0; y < SIZE; y++) {
        if (place[x][y] === "X") continue;

        let numOfSeat = 0;
        move.forEach(([mx, my]) => {
          if (isValid(x + mx, y + my) && place[x + mx][y + my] === "P") {
            numOfSeat++;
          }
        });

        if (checkNumberOfSeat(place[x][y], numOfSeat)) return 0;
      }
    }
    return 1;
  };

  return places.map(checkDistancing);
}
