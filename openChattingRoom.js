/**
 * 오픈채팅방
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42888
 * @param {string[]} recode
 * @returns {string[]}
 */

function solution(recode) {
  let userMap = new Map();
  let chatLog = [];
  const phrase = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  recode.forEach((history) => {
    const [state, id, nickname] = history.split(" ");
    if (nickname) {
      userMap.set(id, nickname);
    }

    if (state !== "Change") {
      answer.push([state, id]);
    }
  });
  return chatLog.map(([state, id]) => userMap.get(id) + phrase[state]);
}
