export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter and setter for code
  get code() {
    return this._code;
  }

  set code(newcode) {
    if (typeof newcode !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = newcode;
  }

  // getter and setter for name
  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = newname;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
