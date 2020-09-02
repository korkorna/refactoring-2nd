'use strict';
const { acquireReading, baseRate, taxThreshold, Reading } = require('./item9');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = taxableChargeFn();

function taxableChargeFn() {
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}

module.exports = taxableCharge;
