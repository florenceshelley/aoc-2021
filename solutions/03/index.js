const {logResults} = require('../../utils/parser');
const {calculatePowerConsumption} = require('./03.1');
const {calculateLifeSupportRating} = require('./03.2');

logResults(
  calculatePowerConsumption,
  calculateLifeSupportRating
);
