/**
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있
으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
▣ 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
▣ 출력설명
첫 번째 줄에 “YES", "NO"를 출력한다.
 */
export function 삼각형판별하기(a, b, c) {
  let answer = "YES",
    max;

  max = a > b ? a : b;
  if (c > max) max = c;

  const sum = a + b + c;
  if (sum - max <= max) answer = "NO";

  return answer;
}

export function 삼각형판별하기_math_max(a, b, c) {
  let answer = "YES",
    max;

  max = Math.max(a, b, c);

  const sum = a + b + c;
  if (sum - max <= max) answer = "NO";

  return answer;
}
