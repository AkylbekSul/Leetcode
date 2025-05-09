/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = new Array();
    if (s.length < 2) {
        return false;
    }
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if (stack[stack.length - 1] === '(' && s[i] === ')') {
                stack.pop();
            } else if (stack[stack.length - 1] === '{' && s[i] === '}') {
                stack.pop();
            } else if (stack[stack.length - 1] === '[' && s[i] === ']') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }
};
