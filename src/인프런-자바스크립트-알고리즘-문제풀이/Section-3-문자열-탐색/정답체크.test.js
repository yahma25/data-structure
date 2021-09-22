import { solution_회문문자열, solution_회문문자열_reverse } from './1.회문문자열';
import { solution_유효한팰린드롬, solution_유효한팰린드롬_optimization } from './2.유효한팰린드롬';

describe('섹션 3 결과 확인', () => {
  test('회문문자열', () => {
    expect(solution_회문문자열('gooG')).toBe('YES');
    expect(solution_회문문자열('bad')).toBe('NO');

    expect(solution_회문문자열_reverse('gooG')).toBe('YES');
    expect(solution_회문문자열_reverse('bad')).toBe('NO');
  });

  test('유효한팰린드롬', () => {
    expect(solution_유효한팰린드롬('found7, time: study; Yduts; emit, 7Dnuof')).toBe('YES');
    expect(solution_유효한팰린드롬('found7, time: study; Yduts; emit, 7Dnuo')).toBe('NO');

    expect(solution_유효한팰린드롬_optimization('found7, time: study; Yduts; emit, 7Dnuof')).toBe(
      'YES'
    );
    expect(solution_유효한팰린드롬_optimization('found7, time: study; Yduts; emit, 7Dnuo')).toBe(
      'NO'
    );
  });
});
