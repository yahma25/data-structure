import { solution_회문문자열, solution_회문문자열_reverse } from './1.회문문자열';

describe('섹션 3 결과 확인', () => {
  test('회문문자열', () => {
    expect(solution_회문문자열('gooG')).toBe('YES');
    expect(solution_회문문자열('bad')).toBe('NO');

    expect(solution_회문문자열_reverse('gooG')).toBe('YES');
    expect(solution_회문문자열_reverse('bad')).toBe('NO');
  });
});
