/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const shortArr = s1.length >= s2.length ? s2.split('') : s1.split('');
  const longArr = s1.length >= s2.length ? s1.split('') : s2.split('');
  return shortArr.reduce((acc, el) => {
    const pos = longArr.indexOf(el);
    if (pos >= 0) {
      longArr.splice(pos, 1);
      return acc + 1;
    }
    return acc;
  }, 0);
}

module.exports = getCommonCharacterCount;
