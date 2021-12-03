const {directions} = require('./02.1');

/**
 * @description
 * Given a list of commands, we will calculate our horizontal position, depth, and aim
 * to determine our final distance from our starting point.
 *
 * Moving downward increases our aim by x units.
 * Moving upward decreases our aim by x units, and finally,
 * Moving forward will increase our horizontal position by x units,
 * and increase our depth by our aim, multiplied by x.
 *
 * Our final distance is then measured by our position multiplied by our depth.
 *
 * @param {string[]} commands - commands determining how the submarine should move
 * @return {number} - final distance the submarine has traveled given the list of commands
 */
const calculateFinalDistance = commands => {
  let position = 0, depth = 0, aim = 0;

  commands.forEach(command => {
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

module.exports = {calculateFinalDistance};
