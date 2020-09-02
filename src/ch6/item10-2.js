'use strict';
const { acquireReading, baseRate, taxThreshold } = require('./item10');

const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(this.year));

module.exports = taxableCharge;
