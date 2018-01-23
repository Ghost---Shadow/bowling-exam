/**
 * Adds all the additional points from spares
 * @param {Integer[]} allThrows
 * @return {Integer} score
 */
function addSpares(allThrows) {
  let additionalScore = 0;

  // Iterate over the array with strides of 2 throws
  for (let i = 0; i < allThrows.length; i += 2) {
    // If a throw and the next throw sums up to 10
    // then add the point of the next throw
    if (allThrows[i] + allThrows[i + 1] === 10) {
      additionalScore += allThrows[i + 2];
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
  for (let i = 0; i < allThrows.length; i += 1) {
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
 * Evaluates score of the match
 * @param {Integer[]} allThrows
 * @return {Integer} score
 */
function score(allThrows) {
  const baseScore = allThrows.reduce((acc, elem) => acc + elem);
  const scoreFromSpares = addSpares(allThrows);
  const scoreFromStrikes = addStrikes(allThrows);
  return baseScore + scoreFromSpares + scoreFromStrikes;
}

module.exports = score;
