/**
 * 121. Best Time to Buy and Sell Stock
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Infinity;
  return prices.reduce((maxProfit, price) => {
    if (min > price) {
      min = price;
      return maxProfit;
    }
    return maxProfit < price - min ? price - min : maxProfit;
  }, 0);
};
