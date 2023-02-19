function palindrome(str) {
  //   return str.split('').reverse().join('') === str;
  return str.split('').every((char, idx) => {
    return char === str[str.length - idx - 1];
  });
}

module.exports = palindrome;
