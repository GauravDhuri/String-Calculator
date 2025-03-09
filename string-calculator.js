function add(stringifiedNums) {
  let numbers;

  if (stringifiedNums.startsWith('//')) {
    const delimiterEndIndex = stringifiedNums.indexOf('\n');
    const delimiterList = stringifiedNums.slice(2, delimiterEndIndex);
    const string = stringifiedNums.slice(delimiterEndIndex + 1); 

    let delimiters = [];

    if (delimiterList.startsWith('[')) {
      delimiters = delimiterList.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));
    } else {
      delimiters = [delimiterList];
    }

    const regex = new RegExp(`[${delimiters.join('|')}|\\n]`, 'g');

    numbers = parseNumbers(string, regex);
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