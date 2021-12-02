const fs = require('fs');

const input = process.argv[2];

const parser = file => {
	if (!file) throw new Error('No file was passed in!');
	const data = fs.readFileSync(file, 'utf-8');
	return data.split('\n');
};

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
