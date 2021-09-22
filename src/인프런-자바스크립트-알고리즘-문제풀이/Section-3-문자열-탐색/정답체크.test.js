import { solution_회문문자열, solution_회문문자열_reverse } from './1.회문문자열';
import { solution_유효한팰린드롬, solution_유효한팰린드롬_optimization } from './2.유효한팰린드롬';
import { solution_숫자만추출, solution_숫자만추출_regex } from './3.숫자만추출';
import {
  solution_가장짧은문자거리,
  solution_가장짧은문자거리_my_thinking,
} from './4.가장짧은문자거리';

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

  test('숫자만추출', () => {
    expect(solution_숫자만추출('g0en2T0s8eSoft')).toBe(208);
    expect(solution_숫자만추출_regex('g0en2T0s8eSoft')).toBe(208);
  });

  test('가장 짧은 문자거리', () => {
    expect(solution_가장짧은문자거리('teachermode', 'e')).toStrictEqual([
      1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0,
    ]);
    expect(solution_가장짧은문자거리('etachermode', 'e')).toStrictEqual([
      0, 1, 2, 2, 1, 0, 1, 2, 2, 1, 0,
    ]);

    expect(solution_가장짧은문자거리_my_thinking('teachermode', 'e')).toStrictEqual([
      1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0,
    ]);
    expect(solution_가장짧은문자거리_my_thinking('etachermode', 'e')).toStrictEqual([
      0, 1, 2, 2, 1, 0, 1, 2, 2, 1, 0,
    ]);
  });
});
