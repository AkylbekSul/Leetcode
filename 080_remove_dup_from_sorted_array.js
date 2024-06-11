/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    let c = 2; // Start from the third position
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[c - 2]) {
            nums[c] = nums[i];
            c++;
        }
    }
    return c;
};

