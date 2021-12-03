const directions = {
  forward: 'forward',
  down: 'down',
  up: 'up'
};

const getPositionTimesDepth = arr => {
  let position = 0, depth = 0;

  arr.forEach(command => {
    const [direction, advance] = command.split(' ');

    switch (direction) {
      case directions.forward: position += +advance; break;
      case directions.down: depth += +advance; break;
      case directions.up: depth -= +advance; break;
    }
  });

  return position * depth;
};

module.exports = {directions, getPositionTimesDepth};
