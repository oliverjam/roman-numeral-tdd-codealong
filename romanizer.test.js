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
  var actual = romanizer(1);
  var expected = 'i';
  t.equal(actual, expected, 'One should convert to i');
  t.end();
});
