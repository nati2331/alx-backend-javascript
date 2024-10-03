import Currency from './3-currency.js';

export default class Pricing {
  // Constructor initializes amount and currency
  constructor(amount, currency) {
    // Validate that amount is a number and currency is an instance of Currency
    if (typeof amount !== 'number' || !(currency instanceof Currency)) throw new Error();
    this._amount = amount;  // Store the amount
    this._currency = currency;  // Store the currency
  }

  // Getter for the amount
  get amount() {
    return this._amount;  // Return the stored amount
  }

  // Setter for the amount
  set amount(value) {
    this._amount = value;  // Store the new amount
  }

  // Getter for the currency
  get currency() {
    return this._currency;  // Return the stored currency
  }

  // Setter for the currency
  set currency(value) {
    this._currency = value;  // Store the new currency
  }

  // Method to display the full price with currency details
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;  // Format the price display string
  }

  // Static method to convert price using a given conversion rate
  static convertPrice(amount, conversionRate) {
    // Validate that amount and conversionRate are numbers
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') throw new Error();
    return amount * conversionRate;  // Return the converted price
  }
}
