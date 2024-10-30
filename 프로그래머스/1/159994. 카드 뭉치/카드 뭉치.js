function solution(cards1, cards2, goal) {
    let idx1 = 0;
    let idx2 = 0;
    
    for(let word of goal) {
        if(idx1 < cards1.length && cards1[idx1] === word) {
            console.log('1', word)
            idx1++;
        } else if(idx2 < cards2.length && cards2[idx2] === word) {
            console.log('2', word)
            idx2++;
        } else {
            return 'No'
        }
    }
    return 'Yes'
}

// function solution(cards1, cards2, goal) {
//     let goalCards1 = goal.filter(e => !cards2.includes(e));
//     let goalCards2 = goal.filter(e => !cards1.includes(e));
//     cards1 = cards1.filter(e => goalCards1.includes(e));
//     cards2 = cards2.filter(e => goalCards2.includes(e));
    
//     if(goalCards1.join('') === cards1.join('') && goalCards2.join('') === cards2.join('')) return 'Yes'
//     else return 'No'
// }