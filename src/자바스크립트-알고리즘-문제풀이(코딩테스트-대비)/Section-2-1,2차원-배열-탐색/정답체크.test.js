import { solution_큰수출력하기, solution_큰수출력하기_math_max } from './1.큰수출력하기';
import { solution_보이는학생, solution_보이는학생_reduce } from './2.보이는학생';
import { solution_가위바위보, solution_가위바위보_subtraction } from './3.가위바위보';
import { solution_점수계산 } from './4.점수계산';
import { solution_등수구하기, solution_등수구하기_sort } from './5.등수구하기';
import { solution_격자판최대합 } from './6.격자판최대합';
import { solution_봉우리 } from './7.봉우리';

describe('섹션 2 결과 확인', () => {
  test('큰수출력하기', () => {
    expect(solution_큰수출력하기([7, 3, 9, 5, 6, 12])).toStrictEqual([7, 9, 6, 12]);
    expect(solution_큰수출력하기_math_max([7, 3, 9, 5, 6, 12])).toStrictEqual([7, 9, 6, 12]);
  });

  test('보이는학생', () => {
    expect(solution_보이는학생([130, 135, 148, 140, 145, 150, 150, 153])).toBe(5);
    expect(solution_보이는학생_reduce([130, 135, 148, 140, 145, 150, 150, 153])).toBe(5);
  });

  test('가위바위보', () => {
    expect(solution_가위바위보([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])).toStrictEqual([
      'A',
      'B',
      'A',
      'B',
      'D',
    ]);
    expect(solution_가위바위보_subtraction([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])).toStrictEqual([
      'A',
      'B',
      'A',
      'B',
      'D',
    ]);
  });

  test('점수계산', () => {
    expect(solution_점수계산([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])).toBe(10);
  });

  test('등수구하기', () => {
    expect(solution_등수구하기([87, 89, 92, 100, 76, 100])).toStrictEqual([5, 4, 3, 1, 6, 1]);
    expect(solution_등수구하기_sort([87, 89, 92, 100, 76, 100])).toStrictEqual([5, 4, 3, 1, 6, 1]);
  });

  test('격자판최대합', () => {
    expect(
      solution_격자판최대합([
        [10, 13, 10, 12, 15],
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19],
      ])
    ).toBe(155);
  });

  test('봉우리', () => {
    expect(
      solution_봉우리([
        [5, 3, 7, 2, 3],
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2],
      ])
    ).toBe(10);
  });
});
