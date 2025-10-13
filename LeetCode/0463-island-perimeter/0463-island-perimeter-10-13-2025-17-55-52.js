/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    const row = grid.length;
    const col = grid[0].length;

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(grid[i][j] === 1) {
                perimeter += 4;

                // 오른쪽에 사각형이 있는 경우
                if(j < col - 1 && grid[i][j+1] === 1) perimeter -= 2;
                // 아래에 사각형이 있는 경우
                if(i < row - 1 && grid[i+1][j] === 1) perimeter -= 2;
            }
        }
    }

    return perimeter
};
