/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    const map = new Map();

    for (let str of strs) {
        let count = new Array(26);
        count.fill(0);

        for (let c of str) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        let key = "";
        for(let i = 0; i < 26; ++i) {
            key += `#${count[i]}`;
        }

        if (!map.has(key)) {
            map.set(key, [str]);
        } else {
            map.get(key).push(str)
        }
    }
    return Array.from(map.values());
};

