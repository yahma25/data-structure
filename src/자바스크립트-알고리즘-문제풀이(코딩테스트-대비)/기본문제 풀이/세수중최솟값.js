export function 세수중최솟값(a, b, c) {
  let answer;

  answer = a < b ? a : b;
  answer = b < c ? b : c;

  return answer;
}

export function 세수중최솟값_Math_Min(a, b, c) {
  return Math.min(a, b, c);
}
