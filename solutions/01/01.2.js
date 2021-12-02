const getNumberOfIncreasedSums = data => (
  data.reduce((acc, curr, i) => (
    +data[i+3] > +curr ? ++acc : acc
  ), 0)
);

module.exports = {getNumberOfIncreasedSums};
