/**
 * 787. Cheapest Flights Within K Stops
 * @see https://leetcode.com/problems/cheapest-flights-within-k-stops/submissions/
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let MinCosts = Array(n)
    .fill()
    .map((_, i) => (i === src ? 0 : Infinity));
  for (let i = 0; i < k + 1; i++) {
    let _MinCosts = [...MinCosts];
    for (let [from, to, price] of flights) {
      _MinCosts[to] = Math.min(_MinCosts[to], MinCosts[from] + price);
    }
    MinCosts = [..._MinCosts];
  }
  return MinCosts[dst] != Infinity ? MinCosts[dst] : -1;
};
