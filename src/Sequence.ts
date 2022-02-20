import { Sequenceable } from "./Sequenceable";

export class Sequence<T> extends Sequenceable<T> {
  constructor(private iter: Iterable<T>) {
    super();
  }

  forEach(cb: (elem: T, idx: number) => unknown): void {
    let idx = 0;
    for (let elem of this.iter) {
      cb(elem, idx++);
    }
  }
}
