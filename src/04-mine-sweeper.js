/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.reduce((acc, el, i, arr) => {
    acc.push([]);
    el.forEach((item, j) => {
      let count = 0;
      if (i > 0 && arr[i - 1][j]) count += 1;
      if (i < (arr.length - 1) && arr[i + 1][j]) count += 1;
      if (j > 0 && el[j - 1]) count += 1;
      if (j < (el.length - 1) && el[j + 1]) count += 1;
      if (i > 0 && j > 0 && arr[i - 1][j - 1]) count += 1;
      if (i > 0 && j < (el.length - 1) && arr[i - 1][j + 1]) count += 1;
      if (i < (arr.length - 1) && j > 0 && arr[i + 1][j - 1]) count += 1;
      if (i < (arr.length - 1) && j < (el.length - 1) && arr[i + 1][j + 1]) count += 1;
      acc[i].push(count);
    });
    return acc;
  }, []);
}

module.exports = minesweeper;
