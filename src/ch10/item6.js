'use strict';

class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._discountRate = 0.03;
    }

    applyDiscount(aNumber) {
        if (!this.discountRate) {
            return aNumber;
        } else {
            return aNumber - (this.discountRate * aNumber);
        }
    }

    get name() {
        return this._name;
    }

    get discountRate() {
        return this._discountRate;
    }

    set discountRate(aNumber) {
        this._discountRate = aNumber;
    }
}

module.exports = Customer;