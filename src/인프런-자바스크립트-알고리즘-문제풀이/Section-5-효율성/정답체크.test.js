import { solution_두배열합치기 } from './1.두배열합치기';

describe('섹션 5 결과 확인', () => {
  test('두배열합치기', () => {
    expect(solution_두배열합치기([1, 2, 3, 3, 5], [6, 7, 9])).toStrictEqual([
      1, 2, 3, 3, 5, 6, 7, 9,
    ]);
    expect(solution_두배열합치기([1, 3, 5], [2, 3, 6, 7, 9])).toStrictEqual([
      1, 2, 3, 3, 5, 6, 7, 9,
    ]);
    expect(solution_두배열합치기([5, 6, 7, 8, 9], [1, 2, 3, 4, 5])).toStrictEqual([
      1, 2, 3, 4, 5, 5, 6, 7, 8, 9,
    ]);
  });
});
