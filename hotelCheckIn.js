/**
 * 호텔 대실
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/155651
 * @param {string[][]} book_time
 * @returns {number}
 */
function solution(book_time) {
  const getTimeByMinute = (time) => {
    if (!time) return 0;
    const [hour, minute] = time.split(":");
    return hour * 60 + parseInt(minute);
  };

  const assignmentRoom = (rooms, checkinTime) => {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] <= checkinTime) return i;
    }
    return -1;
  };

  const CLEANING_TIME = 10;
  let rooms = [];

  book_time.sort((a, b) => getTimeByMinute(a[0]) - getTimeByMinute(b[0]));
  for (let [checkin, checkout] of book_time) {
    const roomNum = assignmentRoom(rooms, getTimeByMinute(checkin));
    if (roomNum < 0) {
      rooms.push(getTimeByMinute(checkout) + CLEANING_TIME);
      continue;
    }
    rooms[roomNum] = getTimeByMinute(checkout) + CLEANING_TIME;
  }
  return rooms.length;
}
