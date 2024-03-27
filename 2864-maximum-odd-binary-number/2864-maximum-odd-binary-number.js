/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let arr = [...s].sort((a,b) => (b-a)).slice(1, s.length);
    console.log(arr)

    return arr.join('') + '1'
};