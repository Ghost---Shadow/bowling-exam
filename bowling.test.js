const score = require('./bowling');

describe('Score when there is ', () => {
  it('no strikes or spares', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedScore = 90;
    expect(score(inputArray)).toBe(expectedScore);
  });
  it('spare followed by nothing', () => {
    const inputArray = [3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedScore = 91 + 7; // base score + second throw
    expect(score(inputArray)).toBe(expectedScore);
  });
  it('strike followed by nothing', () => {
    const inputArray = [3, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedScore = 94 + 3 + 6; // base score + next two throws
    expect(score(inputArray)).toBe(expectedScore);
  });
});
