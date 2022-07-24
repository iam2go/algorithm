/**
 * 406. Queue Reconstruction by Height
 * @see https://leetcode.com/problems/queue-reconstruction-by-height/
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  let result = [];
  people.forEach(([height, index]) => {
    result.splice(index, 0, [height, index]);
  });
  return result;
};
