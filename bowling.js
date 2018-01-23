/**
 * Evaluates score of the match
 * @param {Integer[]} allThrows
 * @return {Integer} score
 */
function score(allThrows) {
  const baseScore = allThrows.reduce((acc, elem) => acc + elem);
  return baseScore;
}

module.exports.score = score;
