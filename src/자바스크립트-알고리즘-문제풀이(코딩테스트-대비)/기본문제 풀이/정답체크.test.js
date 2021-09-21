import { 세수중최솟값, 세수중최솟값_Math_Min } from './세수중최솟값';
import { 삼각형판별하기, 삼각형판별하기_math_max } from './삼각형판별하기';
import { 연필개수 } from './연필개수';
import { solution_1부터N까지합출력하기 } from './1부터N까지합출력하기';
import { solution_최솟값구하기, solution_최솟값구하기_math_min } from './최솟값구하기';
import { solution_홀수, solution_홀수_built_in_function } from './홀수';
import { solution_10부제 } from './10부제';
import { solution_일곱난쟁이 } from './일곱난쟁이';
import { solution_A를해시태그로, solution_A를해시태그로_replace_정규식 } from './A를해시태그로';

describe('섹션 1 결과 확인', () => {
  test('세수중최솟값', () => {
    expect(세수중최솟값(6, 5, 11)).toBe(5);
    expect(세수중최솟값_Math_Min(6, 5, 11)).toBe(5);
  });

  test('삼각형판별하기', () => {
    expect(삼각형판별하기(6, 7, 11)).toBe('YES');
    expect(삼각형판별하기(13, 33, 17)).toBe('NO');

    expect(삼각형판별하기_math_max(6, 7, 11)).toBe('YES');
    expect(삼각형판별하기_math_max(13, 33, 17)).toBe('NO');
  });

  test('연필개수', () => {
    expect(연필개수(25)).toBe(3);
    expect(연필개수(178)).toBe(15);
  });

  test('1부터N까지합출력하기', () => {
    expect(solution_1부터N까지합출력하기(6)).toBe(21);
    expect(solution_1부터N까지합출력하기(10)).toBe(55);
  });

  test('최솟값구하기', () => {
    expect(solution_최솟값구하기([5, 3, 7, 11, 2, 15, 17])).toBe(2);
    expect(solution_최솟값구하기_math_min([5, 3, 7, 11, 2, 15, 17])).toBe(2);
  });

  test('홀수', () => {
    expect(solution_홀수([12, 77, 38, 41, 53, 92, 85])).toStrictEqual([256, 41]);
    expect(solution_홀수_built_in_function([12, 77, 38, 41, 53, 92, 85])).toStrictEqual([256, 41]);
  });

  test('10부제', () => {
    expect(solution_10부제(3, [25, 23, 11, 47, 53, 17, 33])).toBe(3);
    expect(solution_10부제(0, [12, 20, 54, 30, 87, 91, 30])).toBe(3);
  });

  test('일곱난쟁이', () => {
    expect(solution_일곱난쟁이([20, 7, 23, 19, 10, 15, 25, 8, 13])).toStrictEqual([
      20, 7, 23, 19, 10, 8, 13,
    ]);
  });

  test('solution_A를해시태그로', () => {
    expect(solution_A를해시태그로('BANANA')).toBe('B#N#N#');
    expect(solution_A를해시태그로_replace_정규식('BANANA')).toBe('B#N#N#');
  });
});
