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

// There's a pattern emerging here too
// If we change the final if block to use >= then we can generalise them all
// function romanizer(num) {
//   var remaining = num;
//   var result = '';
//
//   if (remaining >= 9) {
//     result += 'IX';
//     remaining -= 9;
//   } else if (remaining >= 5) {
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

// We need a way to map arabic to roman numerals (e.g. 9 -> IX) to generalise the if blocks
// We'll use an array of objects to store these pairs

var values = [
  {
    arabic: 1000,
    roman: 'M',
  },
  {
    arabic: 900,
    roman: 'CM',
  },
  {
    arabic: 500,
    roman: 'D',
  },
  {
    arabic: 400,
    roman: 'CD',
  },
  {
    arabic: 100,
    roman: 'C',
  },
  {
    arabic: 90,
    roman: 'XC',
  },
  {
    arabic: 50,
    roman: 'L',
  },
  {
    arabic: 40,
    roman: 'XL',
  },
  {
    arabic: 10,
    roman: 'X',
  },
  {
    arabic: 9,
    roman: 'IX',
  },
  {
    arabic: 5,
    roman: 'V',
  },
  {
    arabic: 4,
    roman: 'IV',
  },
  {
    arabic: 1,
    roman: 'I',
  },
];

// function romanizer(num) {
//   var remaining = num;
//   var result = '';
// This is the same logic as our multiple if branches before
// It's just abstracted into a loop
//   values.forEach(function(value) {
//     if (remaining >= value.arabic) {
//       result += value.roman;
//       remaining -= value.arabic;
//     }
//   });
//   while (remaining > 0) {
//     result += 'I';
//     remaining -= 1;
//   }
//   return result;
// }

// The previous solution failed for 30 -> XXX because we're only repeating I
// Larger solutions need other roman numerals to be repeated
// We need to combine our two approaches
// function romanizer(num) {
//   var remaining = num;
//   var result = '';
//   values.forEach(function(value) {
//     while (remaining >= value.arabic) {
//       result += value.roman;
//       remaining -= value.arabic;
//     }
//   });
//   return result;
// }

// The final solution didn't cover edge cases like 0 or negative numbers
function romanizer(num) {
  if (num <= 0) return 'The Romans had no representation for less than 1';
  if (num >= 5000)
    return "There's no easy way to represent numbers over 4999 in Roman numerals, sorry!";
  var remaining = num;
  var result = '';
  values.forEach(function(value) {
    while (remaining >= value.arabic) {
      result += value.roman;
      remaining -= value.arabic;
    }
  });
  return result;
}

if (typeof module !== 'undefined') {
  module.exports = romanizer;
}
