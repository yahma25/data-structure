import { answer } from "./큰수의법칙";

test("큰 수의 법칙", () => {
  expect(answer(8, 3, [2, 4, 5, 4, 6])).toBe(46);
  expect(answer(7, 2, [3, 4, 3, 4, 3])).toBe(28);
});
