export default class Building {
  // Constructor initializes sqft
  constructor(sqft) {
    this._sqft = sqft;  // Store the sqft in a private attribute
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;  // Return the stored sqft
  }

  // Method to enforce the implementation of evacuationWarningMessage
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');  // Throw error if not overridden
  }
}
