import { Sequence } from "../src";

describe("test concat", () => {
  test("from arrays", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const seqA = new Sequence(arr1);
    const seqB = new Sequence(arr2);
    const seqC = seqA.concat(seqB);
    let i = 1;
    seqC.forEach((elem) => expect(elem).toBe(i++));
  });
});
