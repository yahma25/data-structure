/**
 * 퀵 정렬
 * 특정 값을 기준으로 선정하고 크게 왼쪽 그룹과 오른쪽 그룹으로 분류하여 정렬
 */

function sortQuick(arr, start, end) {
    if (start >= end) {
        return;
    }

    // 기준
    let pivot = start;
    let leftIdx = start + 1, rightIdx = end;
    let tmp;

    // N
    while (leftIdx <= rightIdx) {
        // 왼쪽에서 찾기: 기준값보다 이하이며, 끝 지점에 도달하기 전까지
        while (arr[leftIdx] <= arr[pivot] && leftIdx <= end) {
            leftIdx++;
        }

        // 오른쪽에서 찾기: 기준값보다 이상이며, 시작 지점 전까지(왼쪽 방향으로 이동 기준)
        while (arr[rightIdx] > arr[pivot] && rightIdx > start) {
            rightIdx--;
        }

        // 엇갈림: 오른쪽에서 찾았던 값(기준점 보다 작은)을 기준점과 위치 교체
        if (leftIdx > rightIdx) {
            tmp = arr[rightIdx];
            arr[rightIdx] = arr[pivot];
            arr[pivot] = tmp;

            // 왼쪽에서 찾은 기준점 보다 큰 값과 오른쪽에서 찾은 기준점 보다 작은 값의 위치 교체
        } else {
            tmp = arr[leftIdx];
            arr[leftIdx] = arr[rightIdx];
            arr[rightIdx] = tmp;
        }
    }

    // 왼쪽 1/2
    sortQuick(arr, start, rightIdx - 1);
    // 오른쪽 1/2
    sortQuick(arr, rightIdx + 1, end);
}

const arr = [3, 1, 10, 5, 6, 4, 9, 7, 2, 8];

sortQuick(arr, 0, arr.length - 1);
console.log(arr);

// const arr = [26, 5, 37, 1, 61, 11, 49, 15, 48, 19];
