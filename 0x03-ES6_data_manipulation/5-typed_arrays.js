/**
 * createInt8TypedArray - Creates an Int8 Typed Array with a specified value at a specific position.
 * @param {Number} length - The length of the typed array.
 * @param {Number} position - The position to insert the value.
 * @param {Number} value - The value to insert at the specified position.
 * @returns {DataView} - A DataView of the created ArrayBuffer.
 * @throws {Error} - Throws an error if the position is outside the range.
 */
const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;

  return new DataView(buffer);
};

export default createInt8TypedArray;
