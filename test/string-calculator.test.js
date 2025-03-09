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

  it('should be able to return sum of numbers separated by custom delimiter ; and new lines', () => {
    expect(add('//;\n1;2\n3;4;5')).toBe(15);
  })

  it('should be able to return sum of numbers separated by custom delimiter : and new lines', () => {
    expect(add('//:\n1:2\n3:4\n5')).toBe(15);
  })

  it('should be able to return sum of numbers separated by custom delimiter | and new lines', () => {
    expect(add('//|\n1|2\n3|4|5')).toBe(15);
  })

  it('should throw an expection if list of numbers has negative value', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
    expect(() => add('//;\n1;-2;3')).toThrow('Negative numbers not allowed: -2');
    expect(() => add('//:\n1:-2:3')).toThrow('Negative numbers not allowed: -2');
    expect(() => add('//|\n1|-2|3')).toThrow('Negative numbers not allowed: -2');
  })

  it('should ignore numbers greater than 1000', () => {
    expect(add('2,1001')).toBe(2);
    expect(add('1000,1001,999')).toBe(1999);
    expect(add('//;\n2;1001;999')).toBe(1001);
  });

  it('should support multi-character delimiters', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
  });
})