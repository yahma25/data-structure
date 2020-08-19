/**
 * 선택 정렬
 * 가장 작은 것을 찾아서 순서를 앞으로 이동시킨다.
 * 가장 작은 값을 찾기 위해 최솟값을 지정한다.
 */

function sortSelection(arr) {
    let minIdx = 0;
    let tmp = 0;

    // N1
    for (let i = 0; i < arr.length; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        
        // N2
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIdx = j;
            }
        }

        tmp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = tmp;
    }
}

const arr = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

sortSelection(arr);
console.log(arr);
