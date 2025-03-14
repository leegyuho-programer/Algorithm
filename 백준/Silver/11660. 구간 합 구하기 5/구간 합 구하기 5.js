const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const [N, M] = input[0].split(' ').map(Number);
const array = input.slice(1, N + 1).map((e) => e.split(' ').map(Number));
const queries = input.slice(N + 1).map((e) => e.split(' ').map(Number));

const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefixSum[i][j] =
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1] +
      array[i - 1][j - 1];
  }
}

const results = [];
for (const [x1, y1, x2, y2] of queries) {
  const sum =
    prefixSum[x2][y2] -
    prefixSum[x1 - 1][y2] -
    prefixSum[x2][y1 - 1] +
    prefixSum[x1 - 1][y1 - 1];
  results.push(sum);
}

console.log(results.join('\n'));