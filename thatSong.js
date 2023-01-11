/**
 * 방금 그 곡
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/17683
 * @param {string} m
 * @param {string[]} musicinfos
 * @returns {string}
 */
function solution(m, musicinfos) {
  const getMinutes = (time) => {
    const [hours, minutes] = time.split(":");
    return hours * 60 + minutes * 1;
  };

  const replaceNote = (notes) =>
    notes.replace(/(\D)#/g, (_, w) => w.toLowerCase());

  const getMusic = (time, notes) =>
    notes.repeat(Math.floor(time / notes.length)) +
    notes.slice(0, time % notes.length);

  let maxPlayTime = 0;
  return musicinfos.reduce((music, info) => {
    const [start, end, title, notes] = info.split(",");
    const playTime = getMinutes(end) - getMinutes(start);
    if (
      getMusic(playTime, replaceNote(notes)).includes(replaceNote(m)) &&
      playTime > maxPlayTime
    ) {
      maxPlayTime = playTime;
      return title;
    }
    return music;
  }, "(None)");
}
