// Require: You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a 'single day' to buy one stock and choosing a 'different day in the future' to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0

// Idea:
// first day is buy
// second day is sell


var maxProfit = function (prices){
    let profit = 0;
    let buy = prices[0];

    for(let i = 1; i < prices.length; i++){
        if(prices[i] > buy) {
            profit = Math.max(profit, prices[i] - buy);
        } else {
            buy = prices[i];
        }
    }
    return profit;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log("Max Profit:", maxProfit(prices));

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


// Explanation:
/**
 * prices = [7, 1, 5, 3, 6, 4]
 * Loop i = 1 | buy = prices[0] : 7 | prices[i] (sell) : 1
 * if (false)
 * buy = prices[i] : 1
 *
 * Loop i = 2 | buy = 1 | prices[i] : 5
 * if (true) | profit = Math.Max(profit : 0, prices[i] - buy = 4) => profit = 4
 *
 * Loop i = 3 | buy = 1 | prices[i] : 3
 * if (true) | profit = Math.Max(profit : 4, prices[i] - buy = 2) => profit = 4
 *
 * Loop i = 4 | buy = 1 | prices[i] : 6
 * if (true) | profit = Math.Max(profit : 4, prices[i] - buy = 5) => profit = 5
 *
 * Loop i = 5 | buy = 1 | prices[i] : 4
 * if (true) | profit = Math.Max(profit : 5, prices[i] - buy = 3) => profit = 5
 *
 * return profit = 5
 * */