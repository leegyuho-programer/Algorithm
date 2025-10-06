/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const sortedG = g.sort((a,b) => a - b);
    const sortedS = s.sort((a,b) => a - b);
    let result = 0;

    while(sortedS.length > 0) {
        if(sortedS[0] >= sortedG[0]) {
            sortedS.shift();
            sortedG.shift();
            result++;
        } else {
            sortedS.shift();
        }
    }
    return result;
};