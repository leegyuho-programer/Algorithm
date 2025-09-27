const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

input = Number(input);

let dots = [1, 4];
let squares = [1, 1];

for (let i = 1; i <= input; i++) {
  const nextDots =
    dots[i] + (Math.sqrt(dots[i]) - 1) * 2 * Math.sqrt(dots[i]) + squares[i];

  dots.push(nextDots);
  squares.push(squares[i] * 4);
}

console.log(dots.pop());