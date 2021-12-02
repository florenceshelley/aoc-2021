const getNumberOfIncreasedMeasurements = data => (
	data.reduce((acc, curr, i) => (
		+data[i+1] > +curr ? ++acc : acc
	), 0)
);

module.exports = {getNumberOfIncreasedMeasurements};
