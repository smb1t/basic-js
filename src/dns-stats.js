const { NotImplementedError } = require('../extensions/index.js');

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
 function getDNSStats(domains){
  let output = {};
	
  for (index in domains) {
    let n = domains[index].split('.').reverse();
    let prop;
    
    for ( let i = 0; i < n.length; i++ ) {
      let el = '.' + n[i];
      
      (i > 0 && i < n.length ) ? prop += el : prop = el;
      output[prop] > 0 ?  output[prop] += 1 : output[prop] = 1;
    }
  }
  
  return output;
}

module.exports = {
  getDNSStats
};
