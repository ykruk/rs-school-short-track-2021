/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const start = 0;
  const end = array.length - 1;
  const mid = Math.floor((end - start) / 2);

  let res = false;

  function find(arr, val, s, e, m) {
    if (val === arr[m]) return m;
    if (val > arr[m]) {
      const st = m + 1;
      const middle = st + Math.floor((e - st) / 2);
      return find(arr, val, st, e, middle);
    }
    const ends = m - 1;
    const middle = s + Math.floor((ends - s) / 2);
    return find(arr, val, s, ends, middle);
  }

  res = find(array, value, start, end, mid);

  return res;
}

module.exports = findIndex;
