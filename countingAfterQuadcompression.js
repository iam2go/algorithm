/**
 * 쿼드압축 후 개수 세기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/68936
 * @param {number[][]} arr
 * @returns {number[]}
 */
function solution(arr) {
  let result = [0, 0]; // [0의 개수, 1의 개수]

  const getSum = (col, row, len) => {
    let sum = 0;
    for (let x = col; x < col + len; x++) {
      for (let y = row; y < row + len; y++) {
        if (arr[x][y] === 1) sum++;
      }
    }
    return sum;
  };

  const compressQuad = (col, row, len) => {
    const sum = getSum(col, row, len);

    if (sum === len * len || sum === 0) {
      result[arr[col][row]] += 1;
      return;
    }

    compressQuad(col, row, len / 2);
    compressQuad(col, row + len / 2, len / 2);
    compressQuad(col + len / 2, row, len / 2);
    compressQuad(col + len / 2, row + len / 2, len / 2);
  };

  compressQuad(0, 0, arr.length);
  return result;
}
