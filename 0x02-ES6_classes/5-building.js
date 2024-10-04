export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // getter and setter for attributes
  get sqft() {
    return this._sqft;
  }

  set sqft(newsqft) {
    if (typeof newsqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newsqft;
  }
}
