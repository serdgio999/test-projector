const checkParentheses = (str) => {
  const stack = [];
  const dictionary = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const openedBrackets = ['[', '{', '('];
  const allAvailableBrackets = Object.entries(dictionary).flat();

  // Get only brackets from str param.
  const splitStr = str.split('').filter(el => allAvailableBrackets.includes(el));

  for (let i = 0; i < splitStr.length; i++) {
    const bracket = splitStr[i];

    if (openedBrackets.includes(bracket)) {
      stack.push(bracket);
    } else {
      const lastEl = stack.pop();
      // Check closed bracket.
      if (bracket !== dictionary[lastEl]) {
        return false;
      }
    }
  }

  return !stack.length;
}

console.log(checkParentheses('--()--')) // true
console.log(checkParentheses('-a]--[')) // false
console.log(checkParentheses('dsa{vsfs{ad')) // false
console.log(checkParentheses('j78(g5b]uyg')) // false
console.log(checkParentheses(',m{i987y}hj')) // true
console.log(checkParentheses('dsa[3ed---:]::')) // true