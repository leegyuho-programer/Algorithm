function solution(s){
    let left = 0;
    let right = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if(right > left) return false;
    }
    return s[0] === '(' && s[s.length - 1] === ')' && left === right ? true : false;
}
