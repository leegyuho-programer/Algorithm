/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        if(haystack.includes(needle)) {
            return haystack.indexOf(needle)
        } else {
            return -1;
        }
    }
};