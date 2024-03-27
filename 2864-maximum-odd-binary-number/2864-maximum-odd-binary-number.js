/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    return [...s].sort().reverse().slice(1, s.length).join('') + '1'
};