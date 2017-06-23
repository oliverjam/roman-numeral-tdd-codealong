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
  var expected = 'I';
  t.equal(actual, expected, 'One should convert to I');
  t.end();
});

test('Romanizer returns the correct result', function(t) {
  var actual = romanizer(2);
  var expected = 'II';
  t.equal(actual, expected, 'Two should convert to II');
  t.end();
});

test('Romanizer returns the correct result', function(t) {
  var actual = romanizer(3);
  var expected = 'III';
  t.equal(actual, expected, 'Three should convert to III');
  t.end();
});

test('Romanizer returns the correct result', function(t) {
  var actual = romanizer(4);
  var expected = 'IV';
  t.equal(actual, expected, 'Four should convert to IV');
  t.end();
});

test('Romanizer returns the correct result', function(t) {
  var actual = romanizer(5);
  var expected = 'V';
  t.equal(actual, expected, 'Five should convert to V');
  t.end();
});

test('Romanizer returns the correct result', function(t) {
  var actual = romanizer(6);
  var expected = 'VI';
  t.equal(actual, expected, 'Six should convert to VI');
  t.end();
});

test('Romanizer returns the correct result', function(t) {
  var actual = romanizer(7);
  var expected = 'VII';
  t.equal(actual, expected, 'Seven should convert to VII');
  t.end();
});

test('Romanizer returns the correct result', function(t) {
  var actual = romanizer(8);
  var expected = 'VIII';
  t.equal(actual, expected, 'Eight should convert to VIII');
  t.end();
});
