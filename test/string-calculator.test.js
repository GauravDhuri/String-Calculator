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

  it('should be able return sum of n numbers (n is set to a limit of 100 for demo purpose)', () => {
    const numbers = Array.from({ length: Math.random() * 100 }, () => Math.floor(Math.random() * 10));
    const input = numbers.join(',');
    const expected = numbers.reduce((sum, num) => sum + num, 0);

    expect(add(input)).toBe(expected);
  })

  it('should be able to return sum of numbers separated by commas and new lines', () => {
    expect(add('1,2\n3,4\n5')).toBe(15);
  })
})