/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      // 한 글자만 건너뛸 수 있으므로 두 가지 경우 확인
      return (
        isPalindrome(s, left + 1, right) ||
        isPalindrome(s, left, right - 1)
      );
    }
  }

  return true;
};

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
