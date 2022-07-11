/**
 * 56. Merge Intervals
 * @see https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  let target = intervals[0];

  intervals.forEach(([start, end]) => {
    if (target && target[1] >= start) {
      target[1] = Math.max(target[1], end);
    } else {
      result.push(target);
      target = [start, end];
    }
  });

  result.push(target);

  return result;
};
