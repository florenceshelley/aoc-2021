const {logResults} = require('../../utils/parser');
const {getNumberOfIncreasedMeasurements} = require('./01.1');
const {getNumberOfIncreasedSums} = require('./01.2');

logResults(
	getNumberOfIncreasedMeasurements,
	getNumberOfIncreasedSums
);
