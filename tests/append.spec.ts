import { Sequence } from "../src";

describe("test concat", () => {
  test("from arrays", () => {
    const seq = new Sequence().append('test');
    let i = 1;
    seq.forEach((elem) => expect(elem).toStrictEqual('test'));
  });
});
