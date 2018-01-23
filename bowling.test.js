const score = require('./bowling');

describe('Score when there is ', () => {
  it('no strikes or spares', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedScore = 90;
    expect(score(inputArray)).toBe(expectedScore);
  });
});
