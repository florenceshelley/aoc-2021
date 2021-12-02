const fs = require('fs');

const input = process.argv[2];

const parser = file => {
	if (!file) throw new Error('No file was passed in!');
	const data = fs.readFileSync(file, 'utf-8');
	return data.split('\n');
};

const logResults = function() {
	const arr = parser(input);
	const args = [...arguments];

	for (let i in args) {
	  const fn = args[i];

	  if (typeof fn !== 'function') continue;

		const result = fn(arr);
		console.log(`Part ${+i + 1} result: ${result}`);
  }
};

module.exports = {parseFile: parser, logResults};
