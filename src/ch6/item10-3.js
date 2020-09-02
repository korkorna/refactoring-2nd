'use strict';
const { acquireReading, baseRate, Reading } = require('./item10');

const aReading = acquireReading();
const baseChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

module.exports = baseChargeAmount;
