function solution(cards1, cards2, goal) {
    let result;
    
    let a = goal.filter(e => cards1.includes(e));
    let b = goal.filter(e => cards2.includes(e));
    
    console.log(a, cards1)
    console.log(b, cards2)
    
    for(let i = 0; i < a.length; i++) {
        if(cards1[i] !== a[i]) return 'No'
    }
    
    for(let i = 0; i < b.length; i++) {
        if(cards2[i] !== b[i]) return 'No'
    }
    return 'Yes'
}

// function solution(cards1, cards2, goal) {
//     let a = goal.filter(e => cards1.includes(e));
//     let b = goal.filter(e => cards2.includes(e));
    
//     cards1 = cards1.filter(e => goal.includes(e));
//     cards2 = cards2.filter(e => goal.includes(e));
//     //5-6번째 줄은 cards1이나 cards2 안에 있는 것이 goal에 없을 수 있기 때문에 작성

//     if(a.join('') === cards1.join('') && b.join('') === cards2.join('')) return 'Yes';
//     return 'No'
// }
// 두 번째 풀이 - 테스트 25 실패

// function solution(cards1, cards2, goal) {
//     let a = goal.filter(e => cards1.includes(e));
//     let b = goal.filter(e => cards2.includes(e));

//     if(a.join('') === cards1.join('') && b.join('') === cards2.join('')) return 'Yes';
//     return 'No'
// } 
// 첫 번째 풀이 - 테스트 20, 21, 24 실패