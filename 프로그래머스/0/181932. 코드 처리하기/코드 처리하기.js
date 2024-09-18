function solution(code) {
    let result = '';
    let mode = 0;
    
    for(let i = 0; i < code.length; i++) {
        if(mode === 0) {
                if(code[i] !== '1') {
                    if(i % 2 === 0) {
                        result += code[i];   
                    }
                } else {
                    mode = 1;
                }
        } else {
                if(code[i] !== '1') {
                    if(i % 2 !== 0) {
                        result += code[i];   
                    }
                } else {
                    mode = 0;
                }
        }
    }
    return result ? result : 'EMPTY'
}