function solution(age) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    let newWord = age.toString().split('')

    for(let i = 0; i < newWord.length; i++) {
        result += arr[newWord[i]];
    }
    return result;
}