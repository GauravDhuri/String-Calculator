function add(stringifiedNums) {
  let numbers;

  if (stringifiedNums.startsWith('//')) {
    const delimiter = stringifiedNums.slice(2, 3);
    const string = stringifiedNums.slice(4); 
    const regex = new RegExp(`[${delimiter}\n]`);

    numbers = parseNumbers(string, regex);
  } else {
    numbers = parseNumbers(stringifiedNums);
  }

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