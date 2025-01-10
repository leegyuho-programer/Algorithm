function solution(today, terms, privacies) {
    let dict = new Map();
    let result = [];
    let term;
    let privacy;
    
    today = today.split('.');
    
    for(let i = 0; i < terms.length; i++) {
        let c = terms[i].split(' ');
        
        dict.set(c[0], parseInt(c[1]));
    }
    
    for(let i = 0; i < privacies.length; i++) {
        term = privacies[i].substr(-1);
        privacy = privacies[i].substr(0, 10).split('.');
        
        const a = (parseInt(today[0]) - parseInt(privacy[0])) * 12 + parseInt(today[1])
        const b = parseInt(privacy[1]) + dict.get(term)
        
        console.log('1', (parseInt(today[0])))
        console.log('2', parseInt(privacy[0]))
        console.log('3', parseInt(today[1]))
        console.log('결과1', (parseInt(today[0]) - parseInt(privacy[0])) * 12 + parseInt(today[1]))
        console.log('4', parseInt(privacy[1]))
        console.log('5', dict.get(term))
        console.log('결과2', parseInt(privacy[1]) + dict.get(term))
        
        if(a > b) {
            result.push(i+1);
        } else if(a === b) {
            if(today[2] >= privacy[2]) {
                result.push(i+1);
            }
        }
        console.log('result', result)
    }
    
    return result;
}