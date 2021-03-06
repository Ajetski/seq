import { Sequence } from '../src';

describe('test filter', () => {
	test('from array', () => {
		let seq = new Sequence([1, 2, 3]);
		seq.filter((val) => val % 2 == 1).forEach((val) => expect(val).not.toBe(2));
	});

	test('from set', () => {
		let seq = new Sequence(new Set([1, 2, 3]));
		seq.filter((n) => n % 2 == 1).forEach((val) => expect(val).not.toBe(2));
	});

	test('from map', () => {
		let map = new Map([
			[1, 'a'],
			[2, 'b'],
			[3, 'c'],
		]);
		let seq = new Sequence(map);
		seq
			.filter(([n, _]) => n % 2 == 1)
			.forEach(([val, _]) => {
				expect(val).not.toBe(2);
			});
	});
});
