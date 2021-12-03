const {expect} = require('chai');
const {calculateDistance} = require('./02.1');
const {calculateFinalDistance} = require('./02.2');

describe('Day 2 Solutions', () => {
	const input = ['forward 5','down 5','forward 8','up 3','down 8','forward 2'];

	describe('Part 1', () => {
		it('should return the correct product of horizontal pos * depth', () => {
			const expected = 150;
			const actual = calculateDistance(input);
			expect(actual).to.eq(expected);
		});
	});

	describe('Part 2', () => {
		it('should return the correct product of final horizontal pos * final depth', () => {
			const expected = 900;
			const actual = calculateFinalDistance(input);
			expect(actual).to.eq(expected);
		});
	});
});
