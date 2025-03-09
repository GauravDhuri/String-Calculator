function add(stringifiedNums) {
  if(stringifiedNums === '') return 0;

  return Number(stringifiedNums);
}

module.exports = {
  add
}