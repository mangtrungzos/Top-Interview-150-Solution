// Require: Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. (khong am : non-negative)

// Xoay mảng sang phải k lần nghĩa là dịch chuyển tất cả các phần tử của mảng sang phải k vị trí.
// Ex: nums = [1, 2, 3, 4, 5] , k = 2
//     [5, 1, 2, 3, 4] | Phần tử cuối cùng 5 sẽ di chuyển đến đầu mảng
// Khi xoay k lần sang phải:
// Các phần tử từ cuối mảng sẽ di chuyển lên đầu mảng.
// Các phần tử ở đầu mảng sẽ dịch chuyển xuống dưới, tùy thuộc vào số lần xoay.


var rotate = function(nums, k){
    const n = nums.length;
    k = k % n;
    const rotated = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};


// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
//     rotate 1 steps to the right: [7,1,2,3,4,5,6]
//     rotate 2 steps to the right: [6,7,1,2,3,4,5]
//     rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
//     rotate 1 steps to the right: [99,-1,-100,3]
//     rotate 2 steps to the right: [3,99,-1,-100]


// Explanation:
/**
 * const n = nums.length; | 7
 * k : Số lần xoay
 * k = k % n | Tối ưu số lần xoay | Vì nếu k >= n thì se xoay về vị trí ban đầu
 * k % n : 3 % 7 = 3 | Vì 3 nhỏ hơn 7, phần dư chính là 3.
 * rotated = new Array(n).fill(0) | Tạo 1 arr mới có độ dài bằng n (7) | initial các phần tử trong rotated thành 0
 *           rotated = [0, 0, 0, 0, 0, 0, 0]
 * Loop : Gán nums[i] vào vị trí mới được tính bằng (i + k) % n
 *
 * 1. i = 0;
 *    (i + k) % n = (0 + 3) % 7 = 3
 *    Assign rotated[3] = nums[0] : 1
 *    rotated = [0, 0, 0, 1, 0, 0, 0]
 *
 * 2. i = 1
 *    (i + k) % n = (1 + 3) % 7 = 4
 *    Assign rotated[4] = nums[0] : 2
 *    rotated = [0, 0, 0, 1, 2, 0, 0]
 *
 * 3. i = 2
 *    (i + k) % n = (2 + 3) % 7 = 5
 *    Assign rotated[4] = nums[0] : 3
 *    rotated = [0, 0, 0, 1, 2, 3, 0]
 *
 * 4. i = 3
 *    (i + k) % n = (3 + 3) % 7 = 6
 *    Assign rotated[6] = nums[0] : 4
 *    rotated = [0, 0, 0, 1, 2, 3, 4]
 *
 * 5. i = 4
 *    (i + k) % n = (4 + 3) % 7 = 0
 *    Assign rotated[0] = nums[0] : 5
 *    rotated = [5, 0, 0, 1, 2, 3, 4]
 *
 * 6. i = 5
 *    (i + k) % n = (5 + 3) % 7 = 1
 *    Assign rotated[1] = nums[0] : 6
 *    rotated = [5, 6, 0, 1, 2, 3, 4]
 *
 * 7. i = 6
 *    (i + k) % n = (6 + 3) % 7 = 2
 *    Assign rotated[2] = nums[0] : 7
 *    rotated = [5, 6, 7, 1, 2, 3, 4]
 * */
