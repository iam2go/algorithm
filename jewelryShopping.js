/**
 * 보석 쇼핑
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/67258
 * @param {*} gems
 * @returns
 */
function solution(gems) {
  const numOfGems = new Set(gems).size;
  let picked = new Map();
  let result = [0, gems.length];

  let end = -1;
  for (let start = 0, len = gems.length; start < len; start++) {
    while (numOfGems > picked.size) {
      end++;

      if (end >= len || start > end) break;

      const gem = gems[end];
      picked.set(gem, (picked.get(gem) || 0) + 1);
    }

    if (numOfGems === picked.size) {
      if (result[1] - result[0] > end - start) {
        result = [start + 1, end + 1];
      }
    }

    const firstGem = gems[start];
    const count = picked.get(firstGem);
    if (count > 1) picked.set(firstGem, count - 1);
    else picked.delete(firstGem);
  }

  return result;
}
