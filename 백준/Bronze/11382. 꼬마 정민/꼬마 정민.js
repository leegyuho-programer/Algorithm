const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(input.reduce((prev, cur) => prev + cur, 0))