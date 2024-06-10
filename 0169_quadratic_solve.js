/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major = nums[0];
    let count = 0;
    for ( let i = 0; i < nums.length; ++i) {
        if (major === nums[i]) {
            ++count;
        }
    }


    for (let i = 1; i < nums.length; ++i) {
        let next = nums[i];
        if (major === next) {
            continue;
        }
        let countNext = 0;
        for (let j = 0; j < nums.length; ++j) {
            if (next === nums[j]) {
                ++countNext;
            }
        }
        if (count < countNext) {
            count = countNext;
            major = next;
        }
    }
    return major;
};
