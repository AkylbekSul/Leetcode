/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counts = new Map();
    for (let i = 0; i < nums.length; ++i) {
        if (!counts.has(nums[i])) {
            counts.set(nums[i], 1);
        } else {
            counts.set(nums[i], counts.get(nums[i]) + 1)
        }
    }
    let majorCount = counts.get(nums[0]);
    let elem = nums[0];
    for ( let i = 1; i < nums.length; ++i) {
        if (majorCount < counts.get(nums[i])) {
            majorCount = counts.get(nums[i]);
            elem = nums[i];
        }
    }
    return elem;
};
