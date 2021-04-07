/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  return names.reduce((acc, el) => {
    if (el in acc.check) {
      acc.out.push(`${el}(${acc.check[el]})`);
      acc.check[el] += 1;
    } else if (acc.out.indexOf(el) > 0) {
      acc.check[el] = 1;
      acc.out.push(`${el}(${acc.check[el]})`);
    } else {
      acc.out.push(el);
      acc.check[el] = 1;
    }
    return acc;
  }, { check: {}, out: [] }).out;
}

module.exports = renameFiles;
