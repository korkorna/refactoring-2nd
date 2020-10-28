'use strict';
const assert = require('assert');

class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._discountRate = 0.03;
    }

    applyDiscount(aNumber) {
        if (!this.discountRate) {
            return aNumber;
        } else {
            assert(this.discountRate >= 0);
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