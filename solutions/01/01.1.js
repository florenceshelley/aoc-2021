/**
 * @description
 * Given an accumulator beginning at 0, if the string parsed to number meets the given condition,
 * the accumulator will be incremented, thereby counting the number of times the condition has been met.
 *
 * @param {string[]|number[]} data - window measurements
 * @return number - count of increased window measurements
 */
const countIncreasedMeasurements = data => (
	data.reduce((acc, curr, i) => (
		+data[i+1] > +curr ? ++acc : acc
	), 0)
);

module.exports = {countIncreasedMeasurements};
