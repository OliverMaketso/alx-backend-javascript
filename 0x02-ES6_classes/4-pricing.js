import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newamount) {
    if (typeof newamount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = newamount;
  }

  // getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newcurrency) {
    if (!(newcurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = newcurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
