import { solution_큰수출력하기, solution_큰수출력하기_math_max } from './1.큰수출력하기';

describe('섹션 2 결과 확인', () => {
  test('큰수출력하기', () => {
    expect(solution_큰수출력하기([7, 3, 9, 5, 6, 12])).toStrictEqual([7, 9, 6, 12]);
    expect(solution_큰수출력하기_math_max([7, 3, 9, 5, 6, 12])).toStrictEqual([7, 9, 6, 12]);
  });
});
