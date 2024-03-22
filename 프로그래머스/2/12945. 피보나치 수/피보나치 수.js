// function solution(n) {
//     let fibonacci = [0, 1];
    
//     for(let i = 2; i <= n; i++) {
//         fibonacci.push(fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]);
//     }
//     return fibonacci[n] % 1234567;
// }
function solution(n) {
    let fibonacci = [0, 1];
    
    for(let i = 2; i <= n; i++){
        fibonacci.push(fibonacci[i] = (fibonacci[i-2] + fibonacci[i-1]) % 1234567);
    }
    return fibonacci[n];
    
}