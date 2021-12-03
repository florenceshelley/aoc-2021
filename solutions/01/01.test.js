const {expect} = require('chai');
const {countIncreasedMeasurements} = require('./01.1');
const {countIncreasedSums} = require('./01.2');

describe('Day 1 Solutions', () => {
	const input = ['199', '200', '208', '210', '200', '207', '240', '269', '260', '263'];

	describe('Part 1', () => {
		it('should return the proper count of increased measurements', () => {
			const expected = 7;
			const actual = countIncreasedMeasurements(input);
			expect(actual).to.eq(expected);
		});
	});

	describe('Part 2', () => {
		it('should return the proper count of increased sums', () => {
			const expected = 5;
			const actual = countIncreasedSums(input);
			expect(actual).to.eq(expected);
		});
	});
});
