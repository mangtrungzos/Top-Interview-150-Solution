// Require: You are given an integer array prices where prices[i] is the price of a given stock on the ith day
//          On each day, you may decide to buy and/or sell the stock
//          You can only hold at most one share of the stock at any time.
//          However, you can buy it then immediately sell it on the same day.

// idea:
//      Buy stock on first day
//      Sell stock on second day
//      If : stock on first day less than stock second day
//      => value[2] - value[1] : profit is cumulative value (cumulative : cộng dồn)


var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[ i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.

// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
