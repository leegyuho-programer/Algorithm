/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const myMap = new Map();
    let result = [];
    let cnt = 1;

    for(const num of nums) {
        myMap.set(num, (myMap.get(num) || 0) + 1)
    }
    
    const sortedArray = [...myMap].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        result.push(sortedArray[i][0])
    }
    return result;
};