export function solution_최대매출(k, arr) {
  let answer,
    p2 = 0,
    sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[p2++];
  }
  answer = sum;

  while (p2 < arr.length) {
    sum += arr[p2] - arr[p2 - k];
    p2++;
    answer = Math.max(answer, sum);
  }

  return answer;
}
