/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const countObj = {};
  domains.forEach((el) => {
    const arr = el.split('.').reverse();
    for (let i = arr.length; i > 0; i--) {
      if (!(i in countObj)) countObj[i] = {};
      const domain = `.${arr.slice(0, i).join('.')}`;
      if (domain in countObj[i]) {
        countObj[i][domain] += 1;
      } else {
        countObj[i][domain] = 1;
      }
    }
  });
  return Object.keys(countObj).reduce(((acc, el) => Object.assign(acc, countObj[el])), {});
}

module.exports = getDNSStats;
