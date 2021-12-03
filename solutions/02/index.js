const {logResults} = require('../../utils/parser');
const {calculateDistance} = require('./02.1');
const {calculateFinalDistance} = require('./02.2');

logResults(
  calculateDistance,
  calculateFinalDistance
);
