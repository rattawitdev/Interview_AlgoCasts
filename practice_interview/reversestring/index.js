// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
    debugger;
  }
  return reversed;

  // return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('abc');

module.exports = reverse;
