/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = "";
    for (let i = 0; i < s.length; ++i) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            str += s[i];
        } else if (s[i] <= 'Z' && s[i] >= 'A') {
            str += s[i].toLowerCase();
        } else if (s[i] >= '0' && s[i] <= '9') {
            str += s[i];
        }
    }
    for (let i = 0; i < str.length / 2; ++i) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
