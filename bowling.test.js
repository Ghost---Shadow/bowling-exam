const bowling = require('./bowling');

describe('Score when there is ', () => {
  it('no strikes or spares', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedScore = 90; // base score
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
  it('spare followed by dud', () => {
    const inputArray = [3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedScore = 91 + 7; // base score + second throw
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
  it('strike followed by dud', () => {
    const inputArray = [3, 10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedScore = 94 + 3 + 6; // base score + next two throws
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
});

describe('There is a strike at the last throw followed by', () => {
  it('dud', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 1];
    const expectedScore = 94 + 1; // base score + fill ball
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
  it('strike', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 10, 10];
    const expectedScore = 94 + 10; // base score + fill ball
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
});

describe('There is a strike at the second last throw followed by', () => {
  it('dud', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 1];
    const expectedScore = 94 + 1; // base score + fill ball
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
  it('another strike followed by a dud', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 10, 1];
    const expectedScore = 101 + 1; // base score + fill ball
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
  it('two strikes', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 10, 10];
    const expectedScore = 111; // base score + fill ball
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
});

describe('There is a spare at the last frame followed by', () => {
  it('dud', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 1];
    const expectedScore = 92; // base score + fill ball
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
  it('strike', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 10];
    const expectedScore = 101; // base score + fill ball
    expect(bowling.score(inputArray)).toBe(expectedScore);
  });
});

describe('Check input array if it', () => {
  // Input is guaranteed to be Number[] but might not be integer
  it('contains float', () => {
    const inputArray = [3.1, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedOutput = bowling.FLOAT_ERROR;
    expect(bowling.score(inputArray)).toBe(expectedOutput);
  });

  // Input is guaranteed to be Number[] but might not be integer
  it('does not contain float', () => {
    const inputArray = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const expectedOutput = 90;
    expect(bowling.score(inputArray)).toBe(expectedOutput);
  });
});
