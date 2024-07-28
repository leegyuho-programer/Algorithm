// function solution(q, r, code) {
//     let result = '';
    
//     for(let i = 0; i < code.length; i++) {
//         if(i % q === r) {
//             result += code[i];
//         }
//     }
//     return result;
// }

function solution(q, r, code) {
    let result = '';
    [...code].filter((e, i) => {
        if(i % q === r) result += e;
    })
    return result;
}