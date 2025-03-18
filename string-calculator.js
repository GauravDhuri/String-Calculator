function calculate(stringifiedNums) {
  let numbers;
  let delimiters = [];

  // Parse numbers and delimiters
  if (stringifiedNums.startsWith('//')) {
    const parsedData = customDelimeter(stringifiedNums, delimiters)
    numbers = parsedData.parseNumbers;
  } else {
    numbers = parseNumbers(stringifiedNums);
  }

  // Validate Numbers
  numbers = validateNumbers(numbers);
  
  // Perform Operation
  const result = performOperation(numbers, delimiters);

  return result;
}

function parseNumbers(stringifiedNums, delimiter = /[\n,]/) {
  return stringifiedNums.split(delimiter).map(Number);
}

function customDelimeter(stringifiedNums, delimiters) {
  const delimiterEndIndex = stringifiedNums.indexOf('\n');
  const delimiterList = stringifiedNums.slice(2, delimiterEndIndex);
  const string = stringifiedNums.slice(delimiterEndIndex + 1); 

  if (delimiterList.startsWith('[')) {
    delimiters = delimiterList.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));
  } else {
    delimiters = [delimiterList];
  }

  const regex = new RegExp(`[${delimiters.join('|')}|\\n]`, 'g');

  numbers = parseNumbers(string, regex);
  return {
    parseNumbers: numbers,
  }
}

function validateNumbers(numbers) {
  const negativeNums = numbers.filter(num => num < 0);
  if (negativeNums.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negativeNums.join(', ')}`);
  }

  return numbers.filter(num => num <= 1000);
}

function performOperation(numbers, delimiters) {
  let operator = '+';
  if(delimiters.includes('*')) operator = '*';

  switch(operator) {
    case '+':
      return numbers.reduce((sum, num) => sum + num, 0);
    case '*':
    return numbers.reduce((sum, num) => sum * num, 0);
  }
}

module.exports = {
  calculate
}