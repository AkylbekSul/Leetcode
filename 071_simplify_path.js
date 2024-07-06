/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const array = path.split('/');
    const stack = new Array();
    let str = "";
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === '' || array[i] === '.') {
            continue;
        } else if ( array[i] === '..') {
            stack.pop();
            continue;
        }
        stack.push(array[i]);
    }

    if (stack.length === 0) {
        str = '/';
    } else {
        for (let i = 0; i < stack.length; ++i) {
            str += `/${stack[i]}`;
        }
    }
    return str;
};
