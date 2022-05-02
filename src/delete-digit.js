const { NotImplementedError } = require('../extensions/index.js');

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
 function deleteDigit(n){
  let output = 0;
  let arr = (n + '').split('');

	for ( let i = 0; i < arr.length; i++ ) {
		let f = arr.filter((el, index) => index !== i);
		f = parseInt(f.join(''));
		if ( output < f ) output = f;
    console.log('f = ' + f);
	}
  
  return output;
}

module.exports = {
  deleteDigit
};
