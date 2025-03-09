function add(stringifiedNums) {
  if(stringifiedNums.startsWith('//')) {
    const delimiter = stringifiedNums.slice(2, 3);
    const string = stringifiedNums.slice(4); 
    const regex = new RegExp(`[${delimiter}\n]`);

    return string.split(regex).map(Number).reduce((sum, num) => sum + num, 0);
  }

  return stringifiedNums.split(/[\n,]/).map(Number).reduce((sum, num) => sum + num, 0);
}

module.exports = {
  add
}