/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; ++i) {
        nums1[m + i] = nums2[i];
    }
    for ( let i = 0; i < nums1.length; ++i) {
        for ( let j = 0; j < nums1.length - 1 - i; ++j) {
            if (nums1[j] > nums1[j + 1]) {
                swap(nums1, j, j + 1);
            }
        }
    }
};

function swap(array, a , b) {
    let c = array[a];
    array[a] = array[b];
    array[b] = c;
}
