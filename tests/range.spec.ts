import { Range } from "../src";

describe("test range constructor", () => {
  test("simple range", () => {
    let seq = new Range(1, 4);
    let num = 1;
    seq.forEach(val => expect(val).toBe(num++));
  });

  test("inverted range", () => {
    let seq = new Range(4, 1);
    let num = 4;
    seq.forEach(val => expect(val).toBe(num--));
  });

  test("range with increment", () => {
    let seq = new Range(1, 10, 2);
    let num = 1;
    seq.forEach(val => {
      expect(val).toBe(num);
      num += 2;
    });
  });
});

describe("test invalid range constructor params", () => {
  test("invalid negative increment", () => {
    const createRange = () => new Range(0, 5, -1);
    expect(createRange).toThrow();
  });

  test("invalid positive increment", () => {
    const createRange = () => new Range(5, 0, 1);
    expect(createRange).toThrow();
  });
});
