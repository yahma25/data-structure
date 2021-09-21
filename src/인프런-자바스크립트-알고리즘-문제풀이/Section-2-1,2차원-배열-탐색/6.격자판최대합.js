/*
격자판 최대합
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다. 
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
니다.
▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다. 
▣ 출력설명
최대합을 출력합니다.
▣ 입력예제 1 
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
▣ 출력예제 1
155
*/
export function solution_격자판최대합(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  let sumOfRows;
  let sumOfCols;
  let sumOfRightDownDiagonal = 0;
  let sumOfLeftDownDiagonal = 0;

  for (let col = 0; col < arr.length; col++) {
    sumOfRows = sumOfCols = 0;

    for (let row = 0; row < arr.length; row++) {
      sumOfRows += arr[col][row];
      sumOfCols += arr[row][col];
    }
    answer = Math.max(answer, sumOfRows, sumOfCols);

    sumOfRightDownDiagonal += arr[col][col];
    sumOfLeftDownDiagonal += arr[col][arr.length - 1 - col];
  }

  answer = Math.max(answer, sumOfRightDownDiagonal, sumOfLeftDownDiagonal);

  return answer;
}

/*
[10, 13, 10, 12, 15], //60
[12, 39, 30, 23, 11], // 115
[11, 25, 50, 53, 15], // 154 !!
[19, 27, 29, 37, 27], // 139
[19, 13, 30, 13, 19], // 94
// 71 117 149 138 87

// 오른쪽 아래 대각선 155
// 왼쪽 아래 대각선   134
*/
