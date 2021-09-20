import { 세수중최솟값, 세수중최솟값_Math_Min } from "./세수중최솟값";

test("세수중최솟값", () => {
  expect(세수중최솟값(6, 5, 11)).toBe(5);
  expect(세수중최솟값_Math_Min(6, 5, 11)).toBe(5);
});
