// Obviously this route isn't going to work
// Time to refactor
// There is some duplication here
// function romanizer(num) {
//   if (num === 2) return 'ii';
//   return 'i';
// }

function romanizer(num) {
  var result = '';
  while (num > 0) {
    result += 'I';
    num -= 1;
  }
  return result;
}

if (module.exports !== undefined) {
  module.exports = romanizer;
}
