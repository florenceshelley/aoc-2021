/**
 * @description
 * Given an accumulator beginning at 0, if the string parsed to number meets the given condition,
 * the accumulator will be incremented, thereby counting the number of times the condition has been met.
 *
 * @param {string[]|number[]} data - sliding window measurements
 * @return number - count of the increased window measurement sums, measuring 3 sides at a time
 */
const countIncreasedSums = data => (
  data.reduce((acc, curr, i) => (
    +data[i+3] > +curr ? ++acc : acc
  ), 0)
);

module.exports = {countIncreasedSums};
