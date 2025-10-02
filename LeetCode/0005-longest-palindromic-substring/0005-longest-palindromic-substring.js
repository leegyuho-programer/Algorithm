/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 2) return s;

    let start = 0;
    let maxLength = 1;

    const expand = (l, r) => {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            if(r - l + 1 > maxLength) {
                start = l;
                maxLength = r - l + 1;
            }
            l--;
            r++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // 홀수 길이 중심: 예) "aba"에서 b가 중심
        expand(i, i + 1); // 짝수 길이 중심: 예) "abba"에서 중간의 두 b 사이
    }

    return s.substring(start, start + maxLength);
};
