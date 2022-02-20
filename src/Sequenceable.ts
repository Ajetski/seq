export abstract class Sequenceable<T> {
  abstract forEach(cb: (elem: T, idx: number) => unknown): void;

	concat(
		nextSequence: Sequenceable<T>
	): Concat<T> {
		return new Concat(this, nextSequence);
	}

  append(
    nextT: T
  ) {
    return new Append(this, nextT);
  }

  map<T2>(
		mappingFunc: (elem: T, idx: number) => T2
	): Map<T, T2> {
    return new Map(mappingFunc, this);
  }

	filter(
		filteringFunc: (elem: T, idx: number) => boolean
	): Filter<T> {
		return new Filter(filteringFunc, this);
	}

	fold<R>(
		init: R,
		operation: (acc: R, elem: T, idx: number) => R
	): R {
		let value = init;
		this.forEach((elem, idx) => {
			value = operation(value, elem, idx);
		});

		return value;
	}

	toArray(): T[] {
		let arr: T[] = [];
		this.forEach((el) => arr.push(el));
		return arr;
	}
}

export class Append<T> extends Sequenceable<T> {
  constructor(
    private baseSequence: Sequenceable<T>,
    private nextT: T
  ) {
    super();
  }

  forEach(cb: (elem: T, idx: number) => unknown): void {
    let idx = 0;
    this.baseSequence.forEach((elem) => cb(elem, idx++));
    cb(this.nextT, idx++);
  }
}

export class Concat<T> extends Sequenceable<T> {
  constructor(
    private baseSequence: Sequenceable<T>,
    private nextSequence: Sequenceable<T>
  ) {
    super();
  }

  forEach(cb: (elem: T, idx: number) => unknown): void {
    let idx = 0;
    this.baseSequence.forEach((elem) => cb(elem, idx++));
    this.nextSequence.forEach((elem) => cb(elem, idx++));
  }
}

export class Map<T, T2> extends Sequenceable<T2> {
  constructor(
    private mappingFunc: (elem: T, idx: number) => T2,
    private baseSequence: Sequenceable<T>
  ) {
    super();
  }

  forEach(cb: (elem: T2, idx: number) => unknown): void {
    let idx = 0;
    this.baseSequence.forEach((elem) =>
      cb(this.mappingFunc(elem, idx), idx++)
    );
  }
}

export class Filter<T> extends Sequenceable<T> {
  constructor(
    private filteringFunc: (elem: T, idx: number) => boolean,
    private baseSequence: Sequenceable<T>
  ) {
    super();
  }

  forEach(cb: (elem: T, idx: number) => unknown): void {
    let idx = 0;
    this.baseSequence.forEach((elem) => {
      if (this.filteringFunc(elem, idx)) {
        cb(elem, idx++);
      }
    });
  }
}
