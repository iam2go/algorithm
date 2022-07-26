/**
 * 455. Assign Cookies
 * @see https://leetcode.com/problems/assign-cookies/
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let index = 0;
  return s.reduce((total, size) => {
    if (g[index] && g[index] <= size) {
      index++;
      return total + 1;
    }
    return total;
  }, 0);
};
