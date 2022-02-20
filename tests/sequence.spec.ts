import { Sequence } from '../src';

describe('test Sequence constructor', () => {
	test('empty sequence', () => {
		let seq = new Sequence();
		let count = 0;
		seq.forEach(() => count++);
		expect(count).toBe(0);
	});

	test('from array', () => {
		let seq = new Sequence([1, 2, 3]);
		let num = 1;
		seq.forEach((val) => expect(val).toBe(num++));
	});

	test('from set', () => {
		let seq = new Sequence(new Set([1, 2, 3]));
		let num = 1;
		seq.forEach((val) => expect(val).toBe(num++));
	});

	test('from map', () => {
		let map = new Map([
			[1, 'a'],
			[2, 'b'],
			[3, 'c'],
		]);
		let seq = new Sequence(map);
		let num = 1;
		let letter = 'a';
		seq.forEach((val) => {
			expect(val[0]).toBe(num);
			expect(val[1]).toBe(letter);
			num += 1;
			letter = String.fromCharCode(letter.charCodeAt(0) + 1);
		});
	});
});

test('test Sequence.toArray', () => {
	let arr = [1, 2, 3];
	let seq = new Sequence(arr);
	expect(seq.toArray()).toStrictEqual(arr);
});
