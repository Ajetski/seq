import { Sequence } from '../src';

describe('test filter', () => {
	test('from array', () => {
		let seq = new Sequence([1, 2, 3]);
		expect(seq.fold(0, (acc, elem) => acc + elem)).toBe(6);
	});

	test('from set', () => {
		let seq = new Sequence(new Set([1, 2, 3]));
		expect(seq.fold(0, (acc, elem) => acc + elem)).toBe(6);
	});

	test('from map', () => {
		let map = new Map([
			[1, 'a'],
			[2, 'b'],
			[3, 'c'],
		]);
		let seq = new Sequence(map);
		expect(seq.fold(0, (acc, [num]) => acc + num)).toBe(6);
	});
});
