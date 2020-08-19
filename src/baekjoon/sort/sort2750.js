/**
 * https://www.acmicpc.net/problem/2750
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
 * 입력
 * - 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 숫자가 주어진다. 
 *   이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
 * 출력
 * - 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
 */

/**
 * 입력 예)
 * 5
 * 5
 * 2
 * 3
 * 4
 * 1
 * 
 * 출력 예)
 * 1
 * 2
 * 3
 * 4
 * 5
 */

/**
 * 생각 정리
 * - 오름차순 정렬
 * - 최소 1개, 최대 1000개
 * - 음수 없음
 * - 중복 없음
 * - 첫 번째 줄은 반복 횟수, 두 번째 줄부터 입력 값
 * - 한 줄씩 출력
 */

const nums = [];
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout })
    .on('line', line => nums.push(Number(line)))
    .on('close', () => {
        // 첫 번째 값이 반복 횟수
        answer(nums.splice(0, 1), nums);
        readline.close();
    });

function answer(count, arr) {
    let min, minIdx, tmp;

    for (let i = 0; i < count; i++) {
        min = 1001;

        // i번째 전까지는 정렬된 상태이므로 0부터 시작할 필요없음
        for (let j = i; j < count; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIdx = j;
            }
        }
        tmp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = tmp;
    }
    
    arr.forEach(num => console.log(num));
}
