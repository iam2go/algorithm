/**
 * 122. Best Time to Buy and Sell Stock II
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  prices.forEach((cost, i) => {
    if (i > 0 && cost > prices[i - 1]) {
      profit += cost - prices[i - 1];
    }
  });
  return profit;
};
