// Majority element : Phần tử đa số

// Idea : Use Algorithm - Boyer moore voting (Biểu quyết Boyer moore)

// Advantage algorithm :
/**
 * Time complexity : Chỉ cần duyệt mảng một lần (O(n)).
 * Space complexity : Chỉ sử dụng thêm hai biến candidate và count, nên tốn O(1) bộ nhớ, rất hiệu quả.
 * */

// Require :
//          - Given an array nums of size n, return the majority element.
//          - The majority element is the element that appears more than ⌊n / 2⌋ times.
//          - You may assume that the majority element always exists in the array.

var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
};

// Note : candidate : biến cho biết phần tử nào xuất hiện nhiều nhất

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * 1. Loop - num = 2
 *    candidate = null | count = 0
 *    if (true) -> candidate = 2
 *    count : num = candidate ( 2 = 2) true -> count++ = 1
 *
 * 2. Loop - num = 2
 *    candidate = 2 | count = 1
 *    if (false)
 *    count : num = candidate (2 = 2) true -> count++ = 2
 *
 * 3. Loop - num = 1
 *    candidate = 2 | count = 2
 *    if (false)
 *    count : num != candidate (1 = 2) false -> count-- = 1
 *
 * 4. Loop - num = 1
 *    candidate = 2 | count = 1
 *    if(false)
 *    count : num != candidate (1 = 2) false -> count-- = 0
 *
 * 5. Loop - num = 1
 *    candidate = 2 | count = 0
 *    if(true) -> candidate = 1
 *    count : num = candidate (1 = 1) true -> count++ = 1
 *
 * 6. Loop - num = 2
 *    candidate = 1 | count = 1
 *    if(false)
 *    count : num != candidate (2 = 1) false -> count-- = 0
 *
 * 7. Loop - num = 2
 *    candidate = 1 | count = 0
 *    if(true) -> candidate = 2
 *    count : num = candidate (2 = 2) true -> count++ = 1
 * */