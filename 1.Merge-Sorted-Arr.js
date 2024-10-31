Merge-Sorted-Arr.js
// Idea: Pointer
// Runtime: 0ms | Beats 100%
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    // Merge in reverse order
    while (p1 >= 0 && p2 >= 0){
        if (nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};


// Solution 2: Use splice(index, count, item1,....item n)
// item: Required. | count: Number of items to be removed. | item: The new elements(s) to be added.

// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m, nums1.length - m, ...nums2);
//     nums1.sort((a,b) => a - b);
// }

var nums1 = [1,2,3,0,0,0];
var m = 3;
var nums2 = [2,5,6];
var n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);


// Example 1:
//
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//              The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
//
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
//              The result of the merge is [1].

// Example 3:
//
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
//              The result of the merge is [1].
//              Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

