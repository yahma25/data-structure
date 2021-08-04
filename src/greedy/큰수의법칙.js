/**
 *
 * @param {number} m 최대 반복 횟수
 * @param {number} k 합산 반복 횟수
 * @param {number[]} nums 숫자 리스트
 * @returns
 */
export function answer(m, k, nums) {
  const ascNums = nums.sort((a, b) => b - a);

  let result = 0;
  let repeat = 0;
  const firstMax = ascNums[0];
  const secondMax = ascNums[1];

  for (let i = 0; i < m; i++) {
    if (repeat === k) {
      result += secondMax;
      repeat = 0;
    } else {
      result += firstMax;
    }
    repeat++;
  }

  return result;
}

/**
 * 최초 풀이
 *
 * 개선 사항
 * - 가장 큰 값, 두 번째로 큰 값을 변수에 세팅해놓고,
 * - 가장 큰 값의 반복 횟수가 끝나면 두 번째로 큰 값을 한 번만 더해주면 됐엇음.
 */
/*
export function answer(m, k, nums) {
  const sortedNums = nums.sort((a, b) => b - a);

  let result = 0;
  let repeat = 0;
  let target = sortedNums[0];
  let repeatCount = 0;

  for (let i = 0; i < m; i++) {
    if (repeat === k) {
      target = sortedNums[repeatCount % 2];
      repeat = 0;
      repeatCount++;
    }
    result += target;
    repeat++;
  }

  return result;
}
*/
