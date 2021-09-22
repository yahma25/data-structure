/*
가장 짧은 문자거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
력하는 프로그램을 작성하세요. 
▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
▣ 입력예제 1 
teachermode e
▣ 출력예제 1
1 0 1 2 1 0 1 2 2 1 0
*/
export function solution_가장짧은문자거리(s, t) {
  let answer = [];
  // 문제에서 길이 제한 조건보다 크게 설정
  let distance = 1000;

  // 왼쪽 -> 오른쪽으로: 왼쪽 기준으로 떨어진 거리 계산
  for (let char of s) {
    distance = char === t ? (distance = 0) : distance + 1;
    answer.push(distance);
  }

  // 오른쪽 -> 왼쪽으로: 오른쪽 기준으로 떨어진 거리 계산하되
  // 이전 거리와 비교해서 짧은 것으로 교체
  distance = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    distance = s[i] === t ? 0 : distance + 1;

    if (distance < answer[i]) {
      answer[i] = distance;
    }
  }

  return answer;
}

// 2중 for문
export function solution_가장짧은문자거리_my_thinking(s, t) {
  let answer = [];

  let leftTIdx = -1;
  let rightTIdx = s.indexOf(t);

  for (let i = 0; i < s.length; i++) {
    if (i === rightTIdx) {
      leftTIdx = rightTIdx;
      answer.push(0);

      // 오른쪽 t 위치 갱신
      for (let j = i + 1; j < s.length; j++) {
        if (s[j] === t) {
          rightTIdx = j;
          break;
        }
      }
    } else {
      answer.push(i - leftTIdx <= rightTIdx - i ? i - leftTIdx : rightTIdx - i);
    }
  }

  return answer;
}

/*
t e a c h e r m o d e
1 0 1 2 1 0 1 2 2 1 0
1 0
i: 0 left: 0 || right: 1
i: 1 left:  || right:
i: 2 left:  || right:
*/
