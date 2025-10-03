/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let maxLength = 1;

    if(s.length < 2) return s;

    const expand = (l, r) => {
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            // 더 긴 팰린드롬을 찾으면 maxLength를 갱신
            if(r - l + 1 > maxLength) {
                start = l;
                maxLength = r - l + 1;
            }
            l--;
            r++;
        }
    };

    for(let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i+1);
    }

    return s.substring(start, start + maxLength)
};
