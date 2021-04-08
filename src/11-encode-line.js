/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.split('').concat('').reduce((acc, el) => {
    if (acc.letter === el) {
      acc.count += 1;
    } else if (acc.letter === '') {
      acc.letter = el;
      acc.count = 1;
    } else {
      acc.output += acc.count > 1 ? acc.count + acc.letter : acc.letter;
      acc.letter = el;
      acc.count = 1;
    }
    return acc;
  }, { letter: '', count: 0, output: '' }).output;
}

module.exports = encodeLine;
