'use strict';
const { acquireReading, baseRate, taxThreshold, enrichReading } = require('./item10');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));

module.exports = taxableCharge;
