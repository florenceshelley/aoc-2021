const {mapBitsToPosition} = require('./03.1');

const findRating = (arr, bit, pos) => (
  arr.length > 1 ? arr.filter(bin => bin.charAt(pos) === bit) : arr
);

const filter = (data, frequencies) => {
  let binaries = data;

  frequencies.forEach((bit, i) => {
    binaries = findRating(binaries, bit, i);
  });

  return binaries;
};

const findBitFrequencies = data => (
  data.reduce((acc, curr) => {
    const zeroesCount = curr.filter(bin => bin === '0').length;
    const onesCount = curr.filter(bin => bin === '1').length;

    if (zeroesCount > onesCount) {
      acc.common.push('0');
      acc.leastCommon.push('1');
    } else {
      acc.common.push('1');
      acc.leastCommon.push('0');
    }

    return acc;
  }, { common: [], leastCommon: []})
);

const calculateLifeSupportRating = data => {
  const mappedBits = mapBitsToPosition(data);
  const {common, leastCommon} = findBitFrequencies(mappedBits);
  const [oxygen] = filter(data, common);
  const [co2] = filter(data, leastCommon);

  const oxygenRating = parseInt(oxygen, 2);
  const co2Rating = parseInt(co2, 2);

  return oxygenRating * co2Rating;
};

module.exports = {calculateLifeSupportRating};
