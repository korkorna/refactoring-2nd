'use strict';
const { acquireReading, baseRate } = require('./item10');

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

module.exports = baseCharge;
