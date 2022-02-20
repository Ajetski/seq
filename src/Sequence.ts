import { Sequenceable } from "./Sequenceable";

export class Sequence<T> extends Sequenceable<T> {
  private iter: Iterable<T>;

  constructor(iter?: Iterable<T>) {
    super();
    this.iter = iter ?? [];
  }

  forEach(cb: (elem: T, idx: number) => unknown): void {
    let idx = 0;
    for (let elem of this.iter) {
      cb(elem, idx++);
    }
  }
}
