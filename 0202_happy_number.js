/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const map = new Map();
    while (n !== 1 && !map.has(n)) {
        map.set(n, true);
        n = getNext(n);
    }
    return n === 1;
};

function getNext(n) {
    let total = 0;
    while (n > 0) {
        let d = n % 10;
        n = Math.floor(n / 10);
        total += d * d;
    }
    return total;
}
