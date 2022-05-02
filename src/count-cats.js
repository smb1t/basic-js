const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats) {
  let output = 0;

  for ( let i = 0; i < cats.length; i++ ) {
    for ( let j = 0; j < cats[i].length; j++ ) {
      if ( cats[i][j] === '^^' ) output++;
    }
  }
  
  return output;
}

module.exports = {
  countCats
};
