const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str){
  let output = '';
  let arr = str.split('');
  let count = 0;
	
  for ( i in arr ) {
    if ( i > 0 && i < arr.length ) {
        if ( str[i] == str[i-1] ) {      
          count++;
        } else {
          output += (count !== 1 ? count : '') + str[i-1];
          count = 1;
        }
        
        if ( i == arr.length - 1 ) output += (count !== 1 ? count : '') + str[i];
      
    } else {
      count = 1;
    }
  }
  
  return output;
}


module.exports = {
  encodeLine
};
