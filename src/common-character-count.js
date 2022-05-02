const { NotImplementedError } = require('../extensions/index.js');

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
 function getCommonCharacterCount(s1,s2){
  let output = 0;
  let sa1 = s1.split('');
  let sa2 = s2.split('');

  for ( let i =0; i < sa1.length; i++ ) {
		if ( sa2.includes(sa1[i]) ) {
      output++;
      sa2.splice(sa2.indexOf(sa1[i]), 1);
    }
  }
  
  return output;
}


module.exports = {
  getCommonCharacterCount
};
