// Require:
//          - Given an integer array nums sorted in non-decreasing order
//          - Remove some duplicates in-place such that each unique element appears at most twice.
//          - The relative order of the elements should be kept the same.
//          - Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
//          - More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.


// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


var removeDuplicates = function (nums) {
    let k = 2;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
//              It does not matter what you leave beyond the returned k (hence they are underscores).


// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
//              It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * 1. initial k = 2
 *    Loop => i = 2 : 1
 *    if(nums[i : 2] : 1 !== nums[k - 2 : 0] : 1) false
 *
 * 2. Loop => i = 3 : 2
 *    if(nums[i : 3] : 2 !== nums[k - 2: 0] : 1) true
 *    nums[k : 2] = nums[i : 3] : 2 | k++ = 3
 *    => nums = [1, 1, 2, 2, 2, 3]
 *
 * 3. Loop => i = 4 : 2
 *    if(nums[i : 4] : 2 !== nums[k - 2: 1] : 1) true
 *    nums[k : 3] = nums[i : 4] : 2 | k++ = 4
 *    => nums = [1, 1, 2, 2, 2, 3]
 *
 * 4. Loop => i = 5 : 3
 *    if(nums[i : 5] : 3 !== nums[k - 2: 2] : 2) true
 *    nums[k : 4] = nums[i : 5] : 3 | k++ = 5
 *    => nums = [1, 1, 2, 2, 3]
 *
 * 5. Loop => i = 6 break.
 * */

// Explanation :

// 1. initial k = 2
// Explanation: We initialize k to 2 because the problem allows each unique element to appear at most twice. So the first two elements are automatically considered valid, and we will start modifying the array from index 2.

// 2. iterate through the array starting from index 2
// Explanation: This loop starts from index 2 and goes until the end of the array. We skip the first two elements because we know that the first two elements are allowed to be duplicates, and we don’t need to process them.
// Main Idea: For each element starting from index 2, we check whether it’s valid (i.e., if it's not a duplicate appearing more than twice) by comparing it with the element located at k - 2.

