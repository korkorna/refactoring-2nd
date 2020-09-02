'use strict';

const _ = require('lodash');

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

function enrichReading(original) {
    const result = _.cloneDeep(original);
    return result;
}

module.exports = {
    acquireReading,
    baseRate,
    taxThreshold,
    enrichReading
};