/**
 * Time complexity
 * - Best n
 * - Worst n2
 * - Average n2
 * 
 * Description
 * - 이미 정렬되어 있으면 비교는 하지만, 스왑은 하지 않음
*/

// order by ASC
// loop. default
export function sortBubble(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                // swap
                const temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
}

// loop. optimization
export function sortBubbleOptimized(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                // swap
                const temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
}
