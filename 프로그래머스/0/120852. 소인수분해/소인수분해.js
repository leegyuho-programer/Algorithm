function solution(n) {
    let result = [];
    let i = 2;
    
    while(i <= n) {
        if(n % i === 0) {
            result.push(i);
            n = n / i;
        } else {
            i++;
        }
    }
    let set = new Set(result)
    
    return [...set];
}