/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const cToW = new Map();
    const wToC = new Map();
    let words = s.split(" ");

    if (words.length !== pattern.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; ++i) {
        if (cToW.has(pattern[i])) {
            if (cToW.get(pattern[i]) !== words[i]) {
                return false;
            }
        } else {
            cToW.set(pattern[i], words[i]);
        }

        if (wToC.has(words[i])) {
            if (wToC.get(words[i]) !== pattern[i]) {
                return false;
            }
        } else {
            wToC.set(words[i], pattern[i]);
        }
    }
    
    return true;
};
