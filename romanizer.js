// Obviously this route isn't going to work
// Time to refactor
// There is some duplication here
// function romanizer(num) {
//   if (num === 2) return 'ii';
//   return 'i';
// }

// Generalise if statements with shared logic into loop
// function romanizer(num) {
//   var result = '';
//   while (num > 0) {
//     result += 'I';
//     num -= 1;
//   }
//   return result;
// }

// We already discovered this approach is probably not going to work
// function romanizer(num) {
//   if (num === 4) {
//     return 'IV';
//   } else {
//     var result = '';
//     while (num > 0) {
//       result += 'I';
//       num -= 1;
//     }
//     return result;
//   }
// }

// This continues using the same mechanism as before - appending to a result variable
function romanizer(num) {
  var result = '';
  if (num === 4) {
    result += 'IV';
  } else {
    while (num > 0) {
      result += 'I';
      num -= 1;
    }
  }
  return result;
}

if (module.exports !== undefined) {
  module.exports = romanizer;
}
