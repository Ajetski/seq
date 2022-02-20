import { Sequence } from '../src';

describe('test append', () => {
	test('append string to empty sequence', () => {
		const seq = new Sequence().append('test');
		let i = 1;
		seq.forEach((elem) => expect(elem).toStrictEqual('test'));
	});
});
