/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let p = 0;
    if (s.length === 0) {
        return true;
    }
    for (let i = 0; i < t.length; ++i) {
        if (s[p] !== t[i]) {
        } else {
            ++p;
        }
        if (p === s.length) {
            return true;
        }
    }
    return false;
};
