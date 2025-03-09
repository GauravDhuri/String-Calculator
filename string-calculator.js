function add(stringifiedNums) {
  let numbers;

  if (stringifiedNums.startsWith('//')) {
    const delimiterEndIndex = stringifiedNums.indexOf('\n');
    const delimiter = stringifiedNums.slice(2, delimiterEndIndex);
    const string = stringifiedNums.slice(delimiterEndIndex + 1); 
    const regex = new RegExp(`[${delimiter}|\\n]`, 'g');

    console.log('string', string, regex)
    numbers = parseNumbers(string, regex);
    console.log(numbers)
  } else {
    numbers = parseNumbers(stringifiedNums);
  }

  numbers = numbers.filter(num => num <= 1000);

  checkForNegativeNumbers(numbers);
  
  return numbers.reduce((sum, num) => sum + num, 0);
}

function checkForNegativeNumbers(numbers) {
  const negativeNums = numbers.filter(num => num < 0);
  if (negativeNums.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negativeNums.join(', ')}`);
  }
}

function parseNumbers(stringifiedNums, delimiter = /[\n,]/) {
  return stringifiedNums.split(delimiter).map(Number);
}

module.exports = {
  add
}