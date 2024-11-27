function solution(maps) {
    let n = maps.length; // 행 갯수
    let m = maps[0].length; // 열 갯수
    let queue = [[0, 0, 1]]; // x, y, 거리
    let directions = [
        [0, 1], // 오른쪽
        [1, 0], // 아래쪽
        [0, -1], // 왼쪽
        [-1, 0], // 위쪽
    ];
    
    while(queue.length > 0) {
        const [x, y, dist] = queue.shift(); // 현재 위치 가져오기
        
        if(x === n - 1 && y === m - 1) return dist;
        
        for(const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if(nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = 0;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1;
}