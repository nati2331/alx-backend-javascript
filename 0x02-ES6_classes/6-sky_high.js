import Building from './5-building.js';  // Import the Building class

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);  // Call the parent class constructor with sqft
    this._floors = floors;  // Store floors in a private attribute
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;  // Return the sqft from the parent class
  }

  // Getter for floors
  get floors() {
    return this._floors;  // Return the stored floors
  }

  // Override the evacuation warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;  // Return the specific warning message
  }
}
