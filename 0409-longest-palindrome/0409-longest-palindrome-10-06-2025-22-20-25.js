/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const length = s.length;
    const map = new Map();

    for(const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let result = 0;

    for(let i = 0; i < map.size; i++) {
        if([...map][i][1] > 1) {
            result += Math.floor([...map][i][1] / 2);
        }
    }

    return length - result*2 > 0 ? result*2 + 1 : result*2;
};