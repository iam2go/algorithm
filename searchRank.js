/**
 * @param {string[]} info
 * @param {string[]} query
 * @returns {number[]}
 */
function solution(info, query) {
  const CATEGORY_NUMBER = 4;
  const conditions = {};

  const getCombinationKey = (list, index) => {
    if (index === CATEGORY_NUMBER) {
      const score = +list.pop();
      const key = list.join("");
      let scoreList = conditions[key] || [];
      scoreList.push(score);
      conditions[key] = scoreList;
      return;
    }

    let temp = list.slice();
    temp[index] = "-";

    getCombinationKey(list, index + 1);
    getCombinationKey(temp, index + 1);
  };

  const lowerBound = (arr, score) => {
    let start = 0,
      end = arr.length;

    while (end > start) {
      let mid = Math.floor((start + end) / 2);

      arr[mid] < score ? (start = mid + 1) : (end = mid);
    }

    return arr.length - end;
  };

  info.forEach((picks) => {
    getCombinationKey(picks.split(" "), 0);
  });

  for (const key in conditions) {
    conditions[key] = conditions[key].sort((a, b) => a - b);
  }

  return query.map((q) => {
    let key = q.replace(/ |and|[0-9]/g, "");
    let minScore = +q.match(/[0-9]+/g)[0];

    if (!conditions[key]) return 0;
    return lowerBound(conditions[key], minScore);
  });
}
