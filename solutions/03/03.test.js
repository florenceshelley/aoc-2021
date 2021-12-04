const {expect} = require('chai');
const {calculatePowerConsumption} = require('./03.1');
const {calculateLifeSupportRating} = require('./03.2');

describe('Day 3 Solutions', () => {
	const input = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'];

	describe('Part 1', () => {
		it('should return the correct power consumption', () => {
			const expected = 198;
			const actual = calculatePowerConsumption(input);
			expect(actual).to.eq(expected);
		});
	});

	describe('Part 2', () => {
		xit('should return the correct life support rating', () => {
			const expected = 230;
			const actual = calculateLifeSupportRating(input);
			expect(actual).to.eq(expected);
		});
	});
});
