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
// Again there is unnecessary duplication here
// Time to refactor
// function romanizer(num) {
//   var result = '';
//   if (num === 6) {
//     result += 'VI';
//   } else if (num === 5) {
//     result += 'V';
//   } else if (num === 4) {
//     result += 'IV';
//   } else {
//     while (num > 0) {
//       result += 'I';
//       num -= 1;
//     }
//   }
//   return result;
// }

// It looks like from 5 up we need to start with V, then append Is
// We already wrote code to append Is, so let's leverage that
// function romanizer(num) {
//   var remaining = num;
//   var result = '';
//   if (remaining >= 5) {
//     result += 'V';
//     remaining -= 5;
//   } else if (num === 4) {
//     result += 'IV';
//     remaining -= 4;
//   }
//   while (remaining > 0) {
//     result += 'I';
//     remaining -= 1;
//   }
//   return result;
// }

function romanizer(num) {
  var remaining = num;
  var result = '';

  if (remaining >= 9) {
    result += 'IX';
    remaining -= 9;
  } else if (remaining >= 5) {
    result += 'V';
    remaining -= 5;
  } else if (num === 4) {
    result += 'IV';
    remaining -= 4;
  }
  while (remaining > 0) {
    result += 'I';
    remaining -= 1;
  }
  return result;
}

if (module.exports !== undefined) {
  module.exports = romanizer;
}
