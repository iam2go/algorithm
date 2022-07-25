/**
 * 134. Gas Station
 * @see https://leetcode.com/problems/gas-station/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0,
    remain = 0,
    total = 0;

  for (let i = 0, len = gas.length; i < len; i++) {
    total += gas[i] - cost[i];
    if (remain < cost[i] - gas[i]) {
      start = i + 1;
      remain = 0;
      continue;
    }
    remain += gas[i] - cost[i];
  }

  return total >= 0 ? start : -1;
};
