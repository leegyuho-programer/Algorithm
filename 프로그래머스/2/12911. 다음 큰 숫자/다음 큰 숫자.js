function solution(n) {
    let nextN = n + 1;
    
    while(true) {
        if(nextN.toString(2).split('').filter(e => e === '1').length === n.toString(2).split('').filter(e => e === '1').length && nextN > n) {
            break;
        }
        nextN++;
    }
    return nextN;
}
