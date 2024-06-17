/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const array = new Array();
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] + 1 === nums[i + 1]) {
            ++p2;
        } else {
            if (p1 !== p2) {
                array.push(`${nums[p1]}->${nums[i]}`);     
            } else {
                array.push(`${nums[i]}`);
            }
            p1 = ++p2;
        } 
    }
    return array;
};

