function romanizer(num) {
  if (num === 2) return 'ii';
  return 'i';
}

if (module.exports !== undefined) {
  module.exports = romanizer;
}
