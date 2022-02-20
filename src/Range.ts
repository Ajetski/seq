import { Sequenceable } from './Sequenceable';

export class Range extends Sequenceable<number> {
	private incr: number;

	constructor(private start: number, private end: number, incr?: number) {
		super();
		this.incr = incr ?? (start < end ? 1 : -1);

		if (start > end && this.incr > 0) {
			throw 'increment cannot be positive when start > end';
		} else if (start < end && this.incr < 0) {
			throw 'increment cannot be negative when end > start';
		}
	}

	private inRange(idx: number) {
		if (this.start < this.end) {
			return idx < this.end;
		} else {
			return idx > this.end;
		}
	}

	forEach(cb: (elem: number, idx: number) => unknown): void {
		for (let idx = this.start; this.inRange(idx); idx += this.incr) {
			cb(idx, idx);
		}
	}
}
