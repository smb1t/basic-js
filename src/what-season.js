const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return ('Unable to determine the time of year!');

  if (
    typeof date == 'string' ||
    Object.prototype.toString.call(date) != '[object Date]' ||
    Object.getOwnPropertySymbols(date).length !== 0
    // Object.getOwnPropertyNames(date).length !== 0
  ) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (2 <= month && month <= 4) return 'spring';
  if (5 <= month && month <= 7) return 'summer';
  if (8 <= month && month <= 10) return 'fall';

  return 'winter';
}

module.exports = {
  getSeason
};