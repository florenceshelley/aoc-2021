// O(n^2) — this is fine
const mapBitsToPosition = data => {
  // Grab the length of the first binary in the array —
  // all binaries in the list should have the same length
  const BINARY_LENGTH = data[0].length;
  const mappedBits = (_, position) => data.map(bin => bin[position]);
  return Array.from({ length: BINARY_LENGTH }, mappedBits);
};

// O(n^2) — todo: refactor this hacky solution
const countBits = data => (
  data.reduce((acc, curr) => {
    const zeroesCount = curr.filter(bin => bin === '0').length;
    const onesCount = curr.filter(bin => bin === '1').length;

    acc.gamma += zeroesCount > onesCount ? '0' : '1';
    acc.epsilon += zeroesCount < onesCount ? '0' : '1';

    return acc;
  }, {gamma: 0, epsilon: 0})
);

const calculatePowerConsumption = arr => {
  const mappedBits = mapBitsToPosition(arr);
  let {gamma, epsilon} = countBits(mappedBits);

  gamma = parseInt(gamma, 2);
  epsilon = parseInt(epsilon, 2);

  return gamma * epsilon;
};

module.exports = {mapBitsToPosition, calculatePowerConsumption};
