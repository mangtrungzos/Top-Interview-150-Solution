// Require :
//         - Give an integer array 'nums' and an integer 'val'
//         - Remove all occurrences of 'val' in 'nums' in-place (in-place : tại chỗ | occurrences : lần xuất hiện)
//         - The order of ele may be changed. Then return 'the number of elements in nums' which are not equal to 'val'

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// - The remaining elements of nums are not important as well as the size of nums.
// - Return k

// Idea :
/**
 * loop nums -> if nums[i] = val
 * => slice(0,1)
 * i--
 * return loop
 * still i = 0 | if i not equal val
 * => else
 */