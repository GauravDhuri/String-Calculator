const { calculate } = require("../String-Calculator");

describe('String calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(calculate('')).toBe(0);
  });

  it('should return number itself for a single number', () => {
    expect(calculate('1')).toBe(1);
  })

  it('return sum of two numbers', () => {
    expect(calculate('1,2')).toBe(3);
  })

  it('should be able return sum of n numbers (n is set to a limit of 100 for demo purpose)', () => {
    const numbers = Array.from({ length: Math.random() * 100 }, () => Math.floor(Math.random() * 10));
    const input = numbers.join(',');
    const expected = numbers.reduce((sum, num) => sum + num, 0);

    expect(calculate(input)).toBe(expected);
  })

  it('should be able to return sum of numbers separated by commas and new lines', () => {
    expect(calculate('1,2\n3,4\n5')).toBe(15);
  })

  it('should be able to return sum of numbers separated by custom delimiter ; and new lines', () => {
    expect(calculate('//;\n1;2\n3;4;5')).toBe(15);
  })

  it('should be able to return sum of numbers separated by custom delimiter : and new lines', () => {
    expect(calculate('//:\n1:2\n3:4\n5')).toBe(15);
  })

  it('should be able to return sum of numbers separated by custom delimiter | and new lines', () => {
    expect(calculate('//|\n1|2\n3|4|5')).toBe(15);
  })

  it('should throw an expection if list of numbers has negative value', () => {
    expect(() => calculate('1,-2,3')).toThrow('Negative numbers not allowed: -2');
    expect(() => calculate('//;\n1;-2;3')).toThrow('Negative numbers not allowed: -2');
    expect(() => calculate('//:\n1:-2:3')).toThrow('Negative numbers not allowed: -2');
    expect(() => calculate('//|\n1|-2|3')).toThrow('Negative numbers not allowed: -2');
  })

  it('should ignore numbers greater than 1000', () => {
    expect(calculate('2,1001')).toBe(2);
    expect(calculate('1000,1001,999')).toBe(1999);
    expect(calculate('//;\n2;1001;999')).toBe(1001);
  });

  it('should support multi-character delimiters', () => {
    expect(calculate('//[***]\n1***2***3')).toBe(6);
  });

  it('should be able to return sum of numbers separated by multiple custom delimiters', () => {
    expect(calculate('//[*][%]\n1*2%3')).toBe(6);
    expect(calculate('//[|][;]\n1|2;3\n4;10001|5')).toBe(15);
  });
})