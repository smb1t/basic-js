const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
	let output = '';
  const defaults = {
    repeatTimes: 1, 
    separator: '+', 
    addition: '', 
    additionRepeatTimes: 1, 
    additionSeparator: '|'   
  };
  
  options = {...defaults, ...options };
  
  for ( let i = 0; i < options.repeatTimes; i++ ) {
    let addition = '';
    
    for ( let j = 0; j < options.additionRepeatTimes; j++ ) {
      addition += options.addition;
      if ( j !== ( options.additionRepeatTimes - 1 ) ) addition += options.additionSeparator;     
    }
    
		output += str + addition;
    if ( i !== ( options.repeatTimes - 1 ) ) output += options.separator;   
  }
  
  return output;
}

module.exports = {
  repeater
};
