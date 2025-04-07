/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a,b) => a - b);
    let sum = 0;
    
    if(cost.length % 3 !== 0) {
        sum += cost.splice(0, cost.length % 3).reduce((prev, cur) => (prev + cur), 0);
    } 
    
    if(cost.length % 3 === 0) {
        sum += cost.filter((num, index) => index % 3 !== 0).reduce((prev, cur) => (prev + cur), 0);
    }

    return sum
};