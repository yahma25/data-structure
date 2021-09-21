/*
가위 바위 보
A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, 
B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
예를 들어 N=5이면
회수     1 2 3 4 5
A의 정보 2 3 3 1 3
B의 정보 1 1 2 2 3
승자 A B A B D
두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램
을 작성하세요.
▣ 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
▣ 출력설명
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
▣ 입력예제 1 
5
2 3 3 1 3
1 1 2 2 3
▣ 출력예제 1
A
B
A
B
D
*/
export function solution_가위바위보(a, b) {
  let answer = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer.push('D');
    else if (a[i] === 1 && b[i] === 2) answer.push('B');
    else if (a[i] === 2 && b[i] === 1) answer.push('A');
    else if (a[i] === 3 && b[i] === 2) answer.push('A');
    else answer.push('B');
  }

  return answer;
}

/*
빼기
A가 이기는 경우 1 or -2
B가 이기는 경우 -1 or 2
1 - 1 = 0 D
1 - 2 = -1 B
1 - 3 = -2 A
-----
2 - 1 = 1 A
2 - 2 = 0 D
2 - 3 = -1 B
-----
3 - 1 = 2 B
3 - 2 = 1 A
3 - 3 = 0 D
*/
export function solution_가위바위보_subtraction(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    const subtraction = a[i] - b[i];
    if (subtraction === 0) answer.push('D');
    else if (subtraction === 1 || subtraction === -2) answer.push('A');
    else answer.push('B');
  }

  return answer;
}

/*
더하기
A가 이기는 경우 4, 3, 5
B가 이기는 경우 3, 5, 4
1 + 1 = 2 D
1 + 2 = 3 B
1 + 3 = 4 A
-----
2 + 1 = 3 A
2 + 2 = 4 D
2 + 3 = 5 B
-----
3 + 1 = 4 B
3 + 2 = 5 A
3 + 3 = 6 D

빼기
A가 이기는 경우 -2, 1, 1
B가 이기는 경우 -1, -1, 2
1 - 1 = 0 D
1 - 2 = -1 B
1 - 3 = -2 A
-----
2 - 1 = 1 A
2 - 2 = 0 D
2 - 3 = -1 B
-----
3 - 1 = 2 B
3 - 2 = 1 A
3 - 3 = 0 D
*/
