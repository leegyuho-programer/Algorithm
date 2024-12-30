// function solution(n, lost, reserve) {
//     // 본인 것 제외하고 빌려줄 수 있는 사람과 여분의 체육복도 없는 사람 구하기
//     const lostOnly = lost.filter(e => !reserve.includes(e)); // 진짜 잃어버린 사람
//     const reserveOnly = reserve.filter(e => !lost.includes(e)); // 여분만 있는 사람
    
//     reserveOnly.forEach(res => {
//         const front = res - 1;
//         const behind = res + 1;
//         const frontIndex = lostOnly.indexOf(front);
//         const behindIndex = lostOnly.indexOf(behind);
        
//         if(frontIndex !== -1) {
//             lostOnly.splice(frontIndex, 1);
//         } else if(behindIndex !== -1) {
//             lostOnly.splice(behindIndex, 1);
//         }
//     })
    
//     return n - lostOnly.length;
// }

function solution(n, lost, reserve) {
    // 1. 중복 제거 후 정렬
    const lostOnly = lost.filter(e => !reserve.includes(e)).sort((a, b) => a - b);
    const reserveOnly = reserve.filter(e => !lost.includes(e)).sort((a, b) => a - b);

    // 2. 체육복 빌려주기
    reserveOnly.forEach(res => {
        const frontIndex = lostOnly.indexOf(res - 1);
        const behindIndex = lostOnly.indexOf(res + 1);

        if (frontIndex !== -1) {
            lostOnly.splice(frontIndex, 1); // 앞 번호에게 빌려줌
        } else if (behindIndex !== -1) {
            lostOnly.splice(behindIndex, 1); // 뒷 번호에게 빌려줌
        }
    });

    // 3. 전체 학생 수에서 체육복이 없는 학생 수를 뺌
    return n - lostOnly.length;
}
