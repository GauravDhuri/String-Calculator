function add(stringifiedNums) {
  if(stringifiedNums === '') return 0;

  return stringifiedNums.split(/[\n,]/).map(Number).reduce((sum, num) => sum + num, 0);
}

module.exports = {
  add
}