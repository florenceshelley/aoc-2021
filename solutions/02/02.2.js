const {directions} = require('./02.1');

const getFinalPositionTimesDepth = arr => {
  let position = 0, depth = 0, aim = 0;

  arr.forEach(command => {
    const [direction, advance] = command.split(' ');

    switch (direction) {
      case directions.forward:
        position += +advance;
        depth += aim * advance;
        break;
      case directions.down: aim += +advance; break;
      case directions.up: aim -= +advance; break;
    }
  });

  return position * depth;
};

module.exports = {getFinalPositionTimesDepth};
