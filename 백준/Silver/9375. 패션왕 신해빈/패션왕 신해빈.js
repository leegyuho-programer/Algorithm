const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

for (let i = 0; i < N; i++) {
  let count = Number(input.shift());
  let varietyMap = new Map();

  for (let j = 0; j < count; j++) {
    let [name, type] = input.shift().trim().split(' ');
    varietyMap.set(type, (varietyMap.get(type) || 0) + 1);
  }

  let result = 1;
  for (let value of varietyMap.values()) {
    result *= value + 1;
  }

  console.log(result - 1);
}