'use strict';

const reading = {
    customer: "ivan",
    quantity: 10,
    month: 5,
    year: 2017
};

function acquireReading() {
    return Object.assign({}, reading);
}

function baseRate(month, year) {
    return 1;
}

function taxThreshold(year) {
    return 0.3
}

class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() {
        return this._customer;
    }

    get quantity() {
        return this._quantity;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }

    get calculateBaseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }
}

module.exports = {
    acquireReading,
    baseRate,
    taxThreshold,
    Reading
};