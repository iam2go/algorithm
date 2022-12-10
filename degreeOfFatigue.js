/**
 * 피로도
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/87946
 * @param {number} k
 * @param {number[][]} dungeons
 * @returns {number}
 */

function solution(k, dungeons) {
  let totalCount = 0;

  const dfs = (remains, count, fatigue) => {
    const availableDungeons = remains.filter(
      (dungeon) => dungeon[0] <= fatigue
    );
    if (availableDungeons.length === 0) {
      totalCount = Math.max(totalCount, count);
      return;
    }
    for (let i = 0, len = availableDungeons.length; i < len; i++) {
      const dungeons = availableDungeons.slice();
      const [min, use] = dungeons.splice(i, 1)[0];
      dfs(dungeons, count + 1, fatigue - use);
    }
  };

  dfs(dungeons, 0, k);
  return totalCount;
}
