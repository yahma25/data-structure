/**
 * 최적화
 */

function sortBubbleOptimized(arr) {
    let tmp;

    // N1
    // 마지막 이미 정렬된 상태이므로 그 전까지만 진행
    for (i = 0; i < arr.length - 1; i++) {
        // N2
        // i는 0부터 시작하므로 첫 번째 반복의 -i(0)은 의미없으므로 -1부터 시작
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

sortBubbleOptimized(arr);
console.log(arr);
