'use strict';

class ChargeCalculator {
    constructor() {
    }
    get baseCharge() {
        return this._customer.baseRate * this._usage;
    }
    charge(customer, usage, provider) {
        const baseCharge = customer.baseRate * usage;
        return baseCharge + provider.connectionCharge;
    }
}

function charge(customer, usage, provider) {
    return new ChargeCalculator().charge(customer, usage, provider);
}

module.exports = charge;