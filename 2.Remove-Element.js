// Require :
//         - Give an integer array 'nums' and an integer 'val'
//         - Remove all occurrences of 'val' in 'nums' in-place (in-place : tại chỗ | occurrences : lần xuất hiện)
//         - The order of ele may be changed. Then return 'the number of elements in nums' which are not equal to 'val'

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// - The remaining elements of nums are not important as well as the size of nums.
// - Return k

// Yeu Cau :
// Cho một mảng số nguyên nums và một số nguyên val.
// Hãy xóa tất cả các phần tử có giá trị bằng val trong nums tại chỗ (không tạo mảng mới).
// Thứ tự các phần tử trong mảng có thể thay đổi. Sau đó, trả về "số lượng phần tử trong nums không bằng val".
// Giả sử số lượng phần tử trong nums không bằng val là k, để đáp ứng yêu cầu, bạn cần thực hiện các điều sau:
// Thay đổi mảng nums sao cho k phần tử đầu tiên trong nums chứa các phần tử không bằng val.
// Các phần tử còn lại trong nums không quan trọng, và kích thước của nums cũng không quan trọng.
// Trả về giá trị k.

// Idea :
/**
 * let k initial 0
 * loop nums -> if nums[i] !== val
 * => nums k = nums i
 * k++
 */

var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

var nums = [0,1,2,2,3,0,4,2], val = 2
removeElement(nums, val);
console.log(nums);

// Example 1:
//
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
//
// Example 2:
//
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
