// Require:
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock.
// You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.
// Find and return the `maximum` profit you can achieve.

// Tips: Comparison based on index of an array
// Return true || false | So sánh index | Nếu i === 0 => true || false

var canJump = function(nums) {
    let goal = nums.length - 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal){
            goal = i;
        }
    }
    return goal === 0;
}

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

//     Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Explanation:
/*
* goal = nums.length - 1 = 4
* nums = [2, 3, 1, 1, 4] | length = 5
*
* Loop i = nums.length - 2 = 3
* if (i + nums[i] >= goal) : 3 + 1 >= goal: 3 | true
* => goal = 3
*
* Loop i = 2
* if (2 + 1 >= 3) | true
* => goal = 2
*
* Loop i = 1
* if (1 + 3 >= 2) | true
* => goal = 1
*
* Loop i = 0
* if (0 + 2 >= 1) | true
* => goal = 0
*
* return goal === 0 | true
* */