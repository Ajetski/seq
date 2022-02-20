import { Sequence } from "../src";

describe("test map", () => {
  test("from array", () => {
    let seq = new Sequence([1, 2, 3]);
    let num = 1;
    seq.map(elem => elem * 2).forEach(val => {
			expect(val).toBe(num * 2);
			num += 1;
		});
  });

  test("from set", () => {
    let seq = new Sequence(new Set([1, 2, 3]));
    let num = 1;
    seq.map(elem => elem * 2).forEach(val => {
			expect(val).toBe(num * 2);
			num += 1;
		});
	});

  test("from map", () => {
    let map = new Map([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
    let seq = new Sequence(map);
    let num = 1;
    let letter = "a";
    seq.map(([n, l]) => [n * 2, l]).forEach(val => {
      expect(val).toStrictEqual([num * 2, letter]);
      num += 1;
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    });
  });
});