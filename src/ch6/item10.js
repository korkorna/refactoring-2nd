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

module.exports = {
    acquireReading,
    baseRate,
    taxThreshold
};