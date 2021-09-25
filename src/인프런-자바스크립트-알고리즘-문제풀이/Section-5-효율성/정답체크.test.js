import { solution_두배열합치기 } from './1.두배열합치기';
import { solution_공통원소구하기 } from './2.공통원소구하기';
import { solution_연속부분수열1 } from './3.연속부분수열1';
import { solution_연속부분수열2, solution_연속부분수열2_one_while } from './4.연속부분수열2';
import { solution_최대매출 } from './5.최대매출';
import { solution_학급회장 } from './6.학급회장(해쉬)';
import { solution_아나그램, solution_아나그램_another } from './7.아나그램';
import { solution_모든아나그램, solution_모든아나그램_two_pointer } from './8.모든아나그램';

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

  test('공통원소구하기', () => {
    expect(solution_공통원소구하기([1, 3, 9, 5, 2, 11], [3, 2, 5, 7, 8])).toStrictEqual([2, 3, 5]);
  });

  test('연속부분수열1', () => {
    expect(solution_연속부분수열1(6, [1, 2, 1, 3, 1, 1, 1, 2])).toBe(3);
    expect(solution_연속부분수열1(6, [1, 1, 1, 2, 4])).toBe(1);
    expect(solution_연속부분수열1(2, [1, 1, 1])).toBe(2);
  });

  test('연속부분수열2', () => {
    expect(solution_연속부분수열2(5, [1, 3, 1, 2, 3])).toBe(10);
    expect(solution_연속부분수열2_one_while(5, [1, 3, 1, 2, 3])).toBe(10);
  });

  test('최대매출', () => {
    expect(solution_최대매출(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])).toBe(56);
  });

  test('학급회장', () => {
    expect(solution_학급회장('BACBACCACCBDEDE')).toBe('C');
  });

  test('아나그램', () => {
    expect(solution_아나그램('AbaAeCe', 'baeeACA')).toBe('YES');
    expect(solution_아나그램('abaCC', 'Caaab')).toBe('NO');
    expect(solution_아나그램('AABBCC', 'EEFFGG')).toBe('NO');
  });

  test('모든아나그램', () => {
    expect(solution_모든아나그램('bacaAacba', 'abc')).toBe(3);
    expect(solution_모든아나그램_two_pointer('bacaAacba', 'abc')).toBe(3);
  });
});
