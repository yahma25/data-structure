import { 세수중최솟값, 세수중최솟값_Math_Min } from './세수중최솟값';
import { 삼각형판별하기, 삼각형판별하기_math_max } from './삼각형판별하기';
import { 연필개수 } from './연필개수';
import { solution_1부터N까지합출력하기 } from './1부터N까지합출력하기';

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
});
