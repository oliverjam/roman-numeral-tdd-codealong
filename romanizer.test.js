var test = require('tape');
var romanizer = require('./romanizer');

test('Tape is up and running', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});

test('Romanizer returns a string', function(t) {
  var actual = romanizer(2);
  var expected = '2';
  t.equal(actual, expected, 'Two should equal two');
  t.end();
});
