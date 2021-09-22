/*
문자열 압축
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 
문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
오. 단 반복횟수가 1인 경우 생략합니다.
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 줄에 압축된 문자열을 출력한다.
▣ 입력예제 1 
KKHSSSSSSSE
▣ 출력예제 1
K2HS7E
*/
export function solution_문자열압축(s) {
  let answer = '';
  let count = 1;
  let target = s + ' ';

  for (let i = 0; i < target.length - 1; i++) {
    if (target[i] === target[i + 1]) {
      count++;
    } else {
      answer += target[i];
      if (count > 1) {
        answer += String(count);
        count = 1;
      }
    }
  }

  return answer;
}
/*
KKHSSSSSSSE
K2HS7E
211234567
*/

export function solution_문자열압축_my_thinking(s) {
  let answer = [s[0]];
  let lastChar = s[0];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === lastChar) {
      count++;
    } else {
      if (count > 1) {
        answer.push(String(count));
        answer.push(s[i]); // 새로 시작하는 글자도 추가
      } else {
        answer.push(s[i]);
      }
      count = 1;
    }
    lastChar = s[i];
  }

  if (lastChar !== s[s.length - 1]) {
    answer.push(s[s.length - 1]);
  }

  return answer.join('');
}
