'use strict';

class ChargeCalculator {
    constructor( usage, provider) {
        this._usage = usage;
        this._provider = provider;
    }

    get baseCharge() {
        return this._customer.baseRate * this._usage;
    }
    charge(customer, usage, provider) {
        const baseCharge = customer.baseRate * this._usage;
        return baseCharge + this._provider.connectionCharge;
    }
}

function charge(customer, usage, provider) {
    return new ChargeCalculator(usage, provider).charge(customer, usage, provider);
}

module.exports = charge;