'use strict';
const { acquireReading, baseRate, enrichReading } = require('./item10');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

module.exports = baseChargeAmount;
