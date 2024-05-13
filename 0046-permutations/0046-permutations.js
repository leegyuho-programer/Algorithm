/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const permutations = [];
    
    // 현재 순열을 생성하기 위해 배열을 탐색하는 데 사용되는 함수로 start는 현재까지 순열에 포함된 요소들의 개수
    function backtrack(start) {
        if (start === nums.length) {
        // 모든 요소를 포함한 순열이 완성되었을 때를 처리
            permutations.push([...nums]);
        } else {
            for (let i = start; i < nums.length; i++) {
                [nums[start], nums[i]] = [nums[i], nums[start]];
                // 현재 요소(nums[start])와 현재 인덱스의 요소(nums[i])를 교환
                // 이를 통해 각 요소가 순열에 한 번씩 등장하도록 순열을 생성
                backtrack(start + 1);
                // 현재 요소를 교환 후, 다음 인덱스로 재귀 호출하여 순열을 계속 생성
                [nums[start], nums[i]] = [nums[i], nums[start]];
                // 재귀 호출이 완료된 후 현재 요소(nums[start])와 다른 요소(nums[i])의 위치를 다시 원래대로 복원
            }
        }
    }
    
    backtrack(0);
    // 재귀 함수를 시작하기 위해 backtrack 함수를 호출
    return permutations;
};