import { LazySequence } from "../src";

describe("test LazySequence constructor", () => {
  test("from array", () => {
    let seq = new LazySequence([1, 2, 3]);
    let num = 1;
    seq.forEach((val) => expect(val).toBe(num++));
  });

  test("from set", () => {
    let seq = new LazySequence(new Set([1, 2, 3]));
    let num = 1;
    seq.forEach((val) => expect(val).toBe(num++));
  });

  test("from map", () => {
    let map = new Map([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
    let seq = new LazySequence(map);
    let num = 1;
    let letter = "a";
    seq.forEach((val) => {
      expect(val[0]).toBe(num);
      expect(val[1]).toBe(letter);
      num += 1;
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    });
  });
});

test("test Sequence.toArray", () => {
  let arr = [1, 2, 3];
  let seq = new LazySequence(arr);
  expect(seq.toArray()).toStrictEqual(arr);
});
