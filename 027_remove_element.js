/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let k = nums.length;

    while ( i < k) {
        if (nums[i] === val) {
            nums[i] = nums[k - 1]
            --k;
        } else {
            ++i;
        }
    }
    return k;
};

