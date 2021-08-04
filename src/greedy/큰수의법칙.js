/**
 *
 * @param {number} m 최대 반복 횟수
 * @param {number} k 합산 반복 횟수
 * @param {number[]} nums 숫자 리스트
 * @returns
 */
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
