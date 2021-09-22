import {
  solution_자릿수의합,
  solution_자릿수의합_my_thinking,
  solution_자릿수의합_my_thinking_2,
} from './1.자릿수의합';
import { solution_뒤집은소수, solution_뒤집은소수_Eratosthenes } from './2.뒤집은소수';

describe('섹션 4 결과 확인', () => {
  test('자릿수의합', () => {
    expect(solution_자릿수의합([128, 460, 603, 40, 521, 137, 123])).toBe(137);
    expect(solution_자릿수의합_my_thinking([128, 460, 603, 40, 521, 137, 123])).toBe(137);
    expect(solution_자릿수의합_my_thinking_2([128, 460, 603, 40, 521, 137, 123])).toBe(137);
  });

  test('뒤집은소수', () => {
    expect(solution_뒤집은소수([32, 55, 62, 20, 250, 370, 200, 30, 100])).toStrictEqual([
      23, 2, 73, 2, 3,
    ]);
    expect(
      solution_뒤집은소수_Eratosthenes([32, 55, 62, 20, 250, 370, 200, 30, 100])
    ).toStrictEqual([23, 2, 73, 2, 3]);
  });
});
