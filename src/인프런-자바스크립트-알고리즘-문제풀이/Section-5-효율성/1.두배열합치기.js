export function solution_두배열합치기(arr1, arr2) {
  let answer = [];

  let p1 = 0,
    p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    arr1[p1] <= arr2[p2] ? answer.push(arr1[p1++]) : answer.push(arr2[p2++]);
  }
  while (p1 < arr1.length) answer.push(arr1[p1++]);
  while (p2 < arr2.length) answer.push(arr2[p2++]);

  return answer;
}
