/**
 * cleanSet - Returns a string of set values that start with a specific string.
 * @param {Set} set - The set to filter.
 * @param {String} startString - The string to match at the start of each value.
 * @returns {String} - A string of matching values joined by '-'.
 */
const cleanSet = (set, startString) => {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  
  return [...set]
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
};

export default cleanSet;

