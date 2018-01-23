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

describe('There is a strike at the last throw followed by', () => {
  it('dud', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 1];
    const expectedScore = 94 + 1; // base score + fill ball
    expect(score(inputArray)).toBe(expectedScore);
  });
  it('strike', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 10];
    const expectedScore = 94 + 10; // base score + fill ball
    expect(score(inputArray)).toBe(expectedScore);
  });
});

describe('There is a strike at the second last throw followed by', () => {
  it('dud', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 1];
    const expectedScore = 94 + 1; // base score + fill ball
    expect(score(inputArray)).toBe(expectedScore);
  });
});
