export default class Currency {
  // Constructor initializes currency code and name
  constructor(code, name) {
    this.code = code;  // Set the currency code
    this.name = name;  // Set the currency name
  }

  // Getter for the currency code
  get code() {
    return this._code;  // Return the stored currency code
  }

  // Setter for the currency code
  set code(value) {
    this._code = value;  // Store the new currency code
  }

  // Getter for the currency name
  get name() {
    return this._name;  // Return the stored currency name
  }

  // Setter for the currency name
  set name(value) {
    this._name = value;  // Store the new currency name
  }

  // Creates the full string representation
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
