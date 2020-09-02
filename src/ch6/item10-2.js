'use strict';
const { acquireReading, baseRate, taxThreshold, enrichReading } = require('./item10');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(this.year));

module.exports = taxableCharge;
