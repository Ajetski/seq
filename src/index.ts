export abstract class Sequence<T> {
  abstract forEach(cb: (elem: T, idx: number) => unknown): void;

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

export class Map<T, T2> extends Sequence<T2> {
  constructor(
    private mappingFunc: (elem: T, idx: number) => T2,
    private baseSequence: Sequence<T>
  ) {
    super();
  }

  forEach(cb: (elem: T2, idx: number) => unknown): void {
    this.baseSequence.forEach((elem, idx) =>
      cb(this.mappingFunc(elem, idx), idx)
    );
  }
}

export class Filter<T> extends Sequence<T> {
  constructor(
    private filteringFunc: (elem: T, idx: number) => boolean,
    private baseSequence: Sequence<T>
  ) {
    super();
  }

  forEach(cb: (elem: T, idx: number) => unknown): void {
    this.baseSequence.forEach((elem, idx) => {
      if (this.filteringFunc(elem, idx)) {
        cb(elem, idx);
      }
    });
  }
}

export class Range extends Sequence<number> {
	private incr: number;

	constructor(
		private start: number,
		private end: number,
		incr?: number
	) {
		super();
		this.incr = incr ?? (start < end ? 1 : -1);

		if (start > end && this.incr > 0) {
			throw "increment cannot be positive when start > end";
		} else if (start < end && this.incr < 0) {
			throw "increment cannot be negative when end > start";
		}
	}

	private inRange(idx: number) {
		if (this.start < this.end) {
			return idx < this.end;
		} else {
			return idx > this.end
		}
	}

	forEach(cb: (elem: number, idx: number) => unknown): void {
    for (let idx = this.start; this.inRange(idx); idx += this.incr) {
      cb(idx, idx);
    }
  }
}

export class LazySequence<T> extends Sequence<T> {
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
