/**
 * 캐시
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/17680
 * @param {number} cacheSize
 * @param {string[]} cities
 * @returns {number}
 */
function solution(cacheSize, cities) {
  const HIT = 1;
  const MISS = 5;

  if (cacheSize === 0) return cities.length * MISS;

  const cache = [];
  let totalTime = 0;

  cities.forEach((c) => {
    const city = c.toLowerCase();
    const index = cache.indexOf(city);

    if (index > -1) {
      cache.splice(index, 1);
      totalTime += HIT;
    } else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      totalTime += MISS;
    }
    cache.push(city);
  });

  return totalTime;
}
