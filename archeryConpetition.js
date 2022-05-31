/**
 * 양궁대회
 * @see https://programmers.co.kr/learn/courses/30/lessons/92342
 * @param {number} n
 * @param {number[]} info
 */
function solution(n, info) {
  const LENGTH = 11;
  let maxDiffer = 0;
  let result = null;

  const compareScoreBoard = (board) => {
    if (!result) {
      result = board;
      return;
    }

    for (let i = LENGTH - 1; i >= 0; i--) {
      if (board[i] === result[i]) continue;
      if (result[i] < board[i]) {
        result = board;
      }
      return;
    }
  };

  const shoot = (remain, scoreBoard, myScore, OpponentScore, index) => {
    if (index === LENGTH - 1) {
      scoreBoard[index] = remain;
      if (maxDiffer < myScore - OpponentScore) {
        maxDiffer = myScore - OpponentScore;
        result = scoreBoard;
      } else if (maxDiffer === myScore - OpponentScore) {
        compareScoreBoard(scoreBoard);
      }
      return;
    }

    if (remain > info[index]) {
      let newScoreBoard = scoreBoard.slice();
      newScoreBoard.splice(index, 1, info[index] + 1);
      shoot(
        remain - info[index] - 1,
        newScoreBoard,
        myScore + 10 - index,
        OpponentScore,
        index + 1
      );
    }
    OpponentScore =
      info[index] > 0 ? OpponentScore + 10 - index : OpponentScore;
    shoot(remain, scoreBoard, myScore, OpponentScore, index + 1);
  };

  shoot(n, Array(LENGTH).fill(0), 0, 0, 0);
  return maxDiffer > 0 ? result : [-1];
}
