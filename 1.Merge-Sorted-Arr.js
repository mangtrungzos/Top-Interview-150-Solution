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

/**
 * nums1 = [1, 2, 3, 0, 0, 0] | nums2 = [2, 5, 6] | m = 3 | n = 3
 * Target : merge nums2 -> nums1
 * Intialize pointer : p1, p2, p
 * p1 = m - 1 : pointer to the last ele of nums1
 * p2 = n - 1 : pointer to the last ele of nums2
 * p = m + n - 1 : pointer to the last ele of nums1 (where the last ele after being merged will be)
 *
 * 1. while ( p1(2) >= 0 && p2(2) >= 0) true
 *    => if (nums1[2] : 3 > nums2[2] : 6) false
 *    => else (nums1[p] : 5 = nums2[p2] : 2 ) nums1[5] = 6 | p2-- : 1 | p-- : 4
 *    => nums1 = [1, 2, 3, 0, 0, 6]
 *
 * 2. while (p1(2) >= 0 && p2(1) >= 0) true
 *    => if (nums1[2] : 3 > nums2[1] : 5) false
 *    => else (nums1[p] :4 = nums2[p2] : 1) nums1[4] = 5 | p2-- : 0 | p-- : 3
 *    => nums1 = [1, 2, 3, 0, 5, 6]
 *
 * 3. while (p1(2) >=0 %% p2(0) >= 0) true
 *    => if (nums1[2] : 3 > nums2[0] : 2) true
 *    => nums1[3] = nums1[p1] : 3 | p1-- : 1 | p-- : 2
 *    => nums1 = [1, 2, 3, 3, 5, 6]
 *
 * 4. while (p1(1) >= 0 && p2(0) >= 0) true
 *    => if (nums1[1] : 2 > nums2[0] : 2) false
 *    => else (nums1[p] : 2 = nums2[p2] : 0 = 2) nums1[2] = 2 | p2-- : -1 | p-- : 1
 *    => nums1 = [1, 2, 2, 3, 5, 6]
 *
 * 5 while ( false ) exit loop
 *   while (p2 >= 0) false | exit loop
 *
 * => final res: nums1 = [1, 2, 2, 3, 4, 5, 6]
 */