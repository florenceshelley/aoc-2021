const {logResults} = require('../../utils/parser');
const {getPositionTimesDepth} = require('./02.1');
const {getFinalPositionTimesDepth} = require('./02.2');

logResults(
  getPositionTimesDepth,
  getFinalPositionTimesDepth
);
