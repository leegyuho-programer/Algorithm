const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const [N, M] = input[0].split(' ').map(Number);
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const board = input.slice(1).map((line) => line.split(''));

const directions = [
  [-1, 0], // 상
  [1, 0], // 하하
  [0, -1], // 좌
  [0, 1], // 우
];

const bfs = (x, y) => {
  let queue = [[x, y]];
  visited[x][y] = true;

  let isInI = false;
  let count = 0;

  if (board[x][y] === 'P') count++;
  if (board[x][y] === 'I') isInI = true;

  while (queue.length) {
    const [qx, qy] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = qx + dx;
      const ny = qy + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        !visited[nx][ny] &&
        board[nx][ny] !== 'X'
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;

        if (board[nx][ny] === 'P') count++;
        if (board[nx][ny] === 'I') isInI = true;
      }
    }
  }

  return isInI ? count : 0;
};

let meetPeople = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && board[i][j] !== 'X') {
      meetPeople += bfs(i, j);
    }
  }
}

console.log(meetPeople > 0 ? meetPeople : 'TT');