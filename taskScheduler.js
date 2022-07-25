/**
 * 621. Task Scheduler
 * @see https://leetcode.com/problems/task-scheduler/
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let maxCount = 0;
  let max = 0;
  let charCount = {};

  tasks.forEach((char) => {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] === max) {
      maxCount++;
    }
    if (charCount[char] > max) {
      max = charCount[char];
      maxCount = 1;
    }
  });

  return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount);
};
