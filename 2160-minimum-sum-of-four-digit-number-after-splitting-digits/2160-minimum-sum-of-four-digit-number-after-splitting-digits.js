/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = num.toString();
    num = [...num].map(e => Number(e));
    num.sort((a, b) => a - b);
    num1 = num[0].toString() + num[2].toString()
    num2 = num[1].toString() + num[3].toString()
    return Number(num1) + Number(num2);
};
