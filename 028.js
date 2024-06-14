/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const m = haystack.length;
    const n = needle.length;
    
    for (let windowStart = 0; windowStart <= m - n; ++windowStart) {
        for (let i = 0; i < n; ++i) {
            if (needle[i] !== haystack[windowStart + i]) {
                break;
            } 
            if (i === n - 1) {
                return windowStart;
            }
        }
    }
    return -1;
};
