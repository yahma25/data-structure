import {
  solution_자릿수의합,
  solution_자릿수의합_my_thinking,
  solution_자릿수의합_my_thinking_2,
} from './1.자릿수의합';

describe('섹션 4 결과 확인', () => {
  test('자릿수의합', () => {
    expect(solution_자릿수의합([128, 460, 603, 40, 521, 137, 123])).toBe(137);
    expect(solution_자릿수의합_my_thinking([128, 460, 603, 40, 521, 137, 123])).toBe(137);
    expect(solution_자릿수의합_my_thinking_2([128, 460, 603, 40, 521, 137, 123])).toBe(137);
  });
});
