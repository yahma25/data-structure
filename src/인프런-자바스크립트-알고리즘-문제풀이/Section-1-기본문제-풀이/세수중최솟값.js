/**
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하
세요.(정렬을 사용하면 안됩니다)
▣ 입력설명
첫 번째 줄에 100이하의 세 자연수가 입력된다.
▣ 출력설명
첫 번째 줄에 가장 작은 수를 출력한다.
 */
export function 세수중최솟값(a, b, c) {
  let answer;

  answer = a < b ? a : b;
  answer = b < c ? b : c;

  return answer;
}

export function 세수중최솟값_Math_Min(a, b, c) {
  return Math.min(a, b, c);
}
