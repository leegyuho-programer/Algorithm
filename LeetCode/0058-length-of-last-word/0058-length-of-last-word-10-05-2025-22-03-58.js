/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    let idx = s.length - 1;
    let result = 0;

    while(idx >= 0 && s[idx] !== ' ') {
        result++;
        idx--;
    }

    return result
};