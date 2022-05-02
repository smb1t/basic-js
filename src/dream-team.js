const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let output = [];

  if ( ! Array.isArray(members) ) return '';
  
  for ( let i = 0; i < members.length; i++ ) {
		if ( typeof(members[i]) === 'string' ) {
        for ( let j = 0; j < members[i].length; j++ ) {
          if ( (/[a-zA-Z]/).test(members[i].charAt(j)) ) {
            output.push(members[i].charAt(j).toUpperCase());
            break;
          }
        }
    }
  }
  
  return output.sort().join('');
}

module.exports = {
  createDreamTeam
};
