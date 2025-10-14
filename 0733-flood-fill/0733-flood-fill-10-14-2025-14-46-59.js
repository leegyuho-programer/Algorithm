/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const row = image.length;
    const col = image[0].length;
    const oldColor = image[sr][sc];

    if(oldColor === newColor) return image;

    function dfs(r, c) {
        if(r < 0 || r >= row || c < 0 || c >= col) return;

        if(image[r][c] !== oldColor) return;

        image[r][c] = newColor;

        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r, c+1);
        dfs(r, c-1);
    }

    dfs(sr,sc);
    return image;
};

// ex) 위에 있는 것이 같은 색이면 색을 변경시키기
// 그리고 변경된 것에서 다시 주변에 있는 것의 색을 변경시키기