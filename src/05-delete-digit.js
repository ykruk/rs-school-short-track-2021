/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return n.toString().split('').reduce((acc, el, i, arr) => {
    const str = arr.slice(0, i).concat(arr.slice(i + 1)).join('');
    const num = parseInt(str, 10);
    if (num > acc.maximal) acc.maximal = num;
    return acc;
  }, { maximal: 0 }).maximal;
}

module.exports = deleteDigit;
