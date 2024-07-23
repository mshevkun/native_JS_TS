import { sum } from "./01";
import { mult } from "./01";

test("sum should be correct", () => {
  const a = 1;
  const b = 2;
  const c = 3;

  const res1 = sum(a, b);
  const res2 = mult(b, c);

  expect(res1).toBe(3);
  expect(res2).toBe(6);
});
