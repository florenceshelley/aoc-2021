const fs = require('fs');

const input = process.argv[2];

/**
 * The given input file will be parsed and returned as an array of rows.
 * @param {string} file - path to the file (from stdin) to be read
 * @return {*|string[]} - line items parsed from the input file
 */
const parser = file => {
	if (!file) throw new Error('No file was passed in!');
	const data = fs.readFileSync(file, 'utf-8');
	return data.split('\n');
};

/**
 * This function is variadic and can take any number of
 * arguments, logging each argument's return value.
 * @param {*} arguments - functions as parameters
 */
const logResults = function() {
	const data = parser(input);
	const args = [...arguments];

  args.forEach((fn, i) => {
    if (typeof fn === 'function') {
      const result = fn(data);
      console.log(`Part ${i + 1} result: ${result}`);
    }
  });
};

module.exports = {parseFile: parser, logResults};
