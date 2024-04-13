// function solution(phone_book) {
//     let map = new Map();
//     phone_book.sort((a, b) => a - b);
    
//     for(let i = 1; i < phone_book.length; i++) {
//         if(phone_book[i].startsWith(phone_book[0])) {
//             return false;
//         }
//     }
//     return true;
// }
function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    
    return true;
}
