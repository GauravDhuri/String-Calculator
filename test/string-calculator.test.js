const { add } = require("../String-Calculator");

describe('String calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return number itself for a single number', () => {
    expect(add('1')).toBe(1);
  })

  it('return sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
  })
})