const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.length - 1;

for (let i = 0; i < N; i++) {
  let array = input.shift().split(' ').map(Number);

  array.shift();

  function dfs(start, result) {
    if (result.length === 6) {
      console.log(result.join(' '));
      return;
    }

    for (let j = start; j < array.length; j++) {
      result.push(array[j]);
      dfs(j + 1, result);
      result.pop();
    }
  }

  dfs(0, []);
  console.log(' ');
}