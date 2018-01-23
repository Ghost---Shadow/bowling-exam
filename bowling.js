/**
 * Adds all the additional points from spares.
 * @param {Integer[]} allThrows
 * @return {Integer} score
 */
function addSpares(allThrows) {
  let additionalScore = 0;

  // Iterate over the array with strides of 2 throws.
  for (let i = 0; i < 18; i += 2) {
    // The total value of a spare is 10 plus the number of
    // pins knocked down in their next throw.
    if (allThrows[i] + allThrows[i + 1] === 10) {
      additionalScore += allThrows[i + 1];
    }
  }

  // Return this additional score
  return additionalScore;
}

/**
 * Adds all the additional points from strikes
 * @param {Integer[]} allThrows
 * @return {Integer} score
 */
function addStrikes(allThrows) {
  let additionalScore = 0;

  // Iterate over the array with strides of 1 throw
  for (let i = 0; i < 18; i += 1) {
    // If a throw knocks out 10 pinns
    // then add the point of the next two throws
    if (allThrows[i] === 10) {
      additionalScore += allThrows[i + 1] + allThrows[i + 2];
    }
  }
  // Return this additional score
  return additionalScore;
}
/**
 * Validates the input array and returns an Error string
 * @param {Number[]} allThrows
 * @return bool or Error string
 */
function validateInput(allThrows) {
  const len = allThrows.length;
  if (!(len === 20 || len === 21)) {
    return module.exports.ARRAY_LENGTH_ERROR;
  }
  const stringArray = allThrows.map(elem => elem.toString());
  const floats = stringArray.filter(elem => elem.indexOf('.') > -1);
  if (floats.length > 0) {
    return module.exports.FLOAT_ERROR;
  }
  return true;
}

/**
 * Evaluates score of the match and returns a score
 * or error message
 * @param {Integer[]} allThrows
 * @return {Integer} score
 */
function score(allThrows) {
  const check = validateInput(allThrows);
  if (check !== true) {
    return check;
  }
  const baseScore = allThrows.reduce((acc, elem) => acc + elem);
  const scoreFromSpares = addSpares(allThrows);
  const scoreFromStrikes = addStrikes(allThrows);
  return baseScore + scoreFromSpares + scoreFromStrikes;
}

module.exports.score = score;
module.exports.FLOAT_ERROR = 'Error: Expected Integer Array, got Float';
module.exports.ARRAY_LENGTH_ERROR = 'Error: Invalid Array length, must be 20 or 21';
