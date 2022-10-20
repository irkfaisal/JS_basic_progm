//   Rotate an Array in JavaScript

// Method 1
const rotateArray1 = function (nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }

    return nums;
}
let nums = [1, 2, 3, 4, 5];
let k = 3;
console.log(nums);

// Method 2
const rotateArray2 = function (nums, k) {

    // reverse helper function
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    k %= nums.length;

    reverse(nums, 0, (nums.length - 1));
    reverse(nums, 0, (k - 1));
    reverse(nums, k, (nums.length - 1));

    return nums;
}