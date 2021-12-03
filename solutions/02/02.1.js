/** Valid directions */
const directions = {
  forward: 'forward',
  down: 'down',
  up: 'up'
};

/**
 * @description
 * Given a list of commands, we will calculate our horizontal position and depth
 * to determine our distance from our starting point.
 *
 * Moving forward increases our horizontal position by x units.
 * Moving downward increases our depth by x units, and finally,
 * moving upward decreases our depth by x units.
 *
 * Our distance is then measured by our position multiplied by our depth.
 *
 * @param {string[]} commands - commands determining how the submarine should move
 * @return {number} - distance the submarine has traveled given the list of commands
 */
const calculateDistance = commands => {
  let position = 0, depth = 0;

  commands.forEach(command => {
    const [direction, advance] = command.split(' ');

    switch (direction) {
      case directions.forward: position += +advance; break;
      case directions.down: depth += +advance; break;
      case directions.up: depth -= +advance; break;
    }
  });

  return position * depth;
};

module.exports = {directions, calculateDistance};
