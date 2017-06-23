var test = require('tape');
var romanizer = require('./romanizer');

test('Tape is up and running', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});

test('Romanizer returns a string', function(t) {
  var actual = typeof romanizer(2);
  var expected = 'string';
  t.equal(actual, expected, 'Output should be a string');
  t.end();
});

test('Romanizer returns the correct result', function(t) {
  var actual = romanizer(0);
  var expected = 'The Romans had no representation for less than 1';
  t.equal(actual, expected, 'Zero should have no equivalent Roman numeral');
  t.end();
});

// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(1);
//   var expected = 'I';
//   t.equal(actual, expected, 'One should convert to I');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(2);
//   var expected = 'II';
//   t.equal(actual, expected, 'Two should convert to II');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(3);
//   var expected = 'III';
//   t.equal(actual, expected, 'Three should convert to III');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(4);
//   var expected = 'IV';
//   t.equal(actual, expected, 'Four should convert to IV');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(5);
//   var expected = 'V';
//   t.equal(actual, expected, 'Five should convert to V');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(6);
//   var expected = 'VI';
//   t.equal(actual, expected, 'Six should convert to VI');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(7);
//   var expected = 'VII';
//   t.equal(actual, expected, 'Seven should convert to VII');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(8);
//   var expected = 'VIII';
//   t.equal(actual, expected, 'Eight should convert to VIII');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(9);
//   var expected = 'IX';
//   t.equal(actual, expected, 'Nine should convert to IX');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(10);
//   var expected = 'X';
//   t.equal(actual, expected, 'Ten should convert to X');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(11);
//   var expected = 'XI';
//   t.equal(actual, expected, 'Eleven should convert to XI');
//   t.end();
// });
//
// test('Romanizer returns the correct result', function(t) {
//   var actual = romanizer(30);
//   var expected = 'XXX';
//   t.equal(actual, expected, '30 should convert to XXX');
//   t.end();
// });

var values = [
  {
    arabic: 5000,
    roman:
      "There's no easy way to represent numbers over 4999 in Roman numerals, sorry!",
  },
  {
    arabic: 4999,
    roman: 'MMMMCMXCIX',
  },
  {
    arabic: 1000,
    roman: 'M',
  },
  {
    arabic: 900,
    roman: 'CM',
  },
  {
    arabic: 774,
    roman: 'DCCLXXIV',
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
    arabic: 392,
    roman: 'CCCXCII',
  },
  {
    arabic: 101,
    roman: 'CI',
  },
  {
    arabic: 100,
    roman: 'C',
  },
  {
    arabic: 98,
    roman: 'XCVIII',
  },
  {
    arabic: 90,
    roman: 'XC',
  },
  {
    arabic: 87,
    roman: 'LXXXVII',
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
    arabic: 30,
    roman: 'XXX',
  },
  {
    arabic: 14,
    roman: 'XIV',
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
    arabic: 7,
    roman: 'VII',
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
    arabic: 3,
    roman: 'III',
  },
  {
    arabic: 1,
    roman: 'I',
  },
];

values.forEach(function(value) {
  test('Romanizer returns the correct result', function(t) {
    var actual = romanizer(value.arabic);
    var expected = value.roman;
    t.equal(
      actual,
      expected,
      value.arabic + ' should convert to ' + value.roman
    );
    t.end();
  });
});
