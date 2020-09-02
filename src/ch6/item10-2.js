'use strict';
const { acquireReading, baseRate, taxThreshold, enrichReading } = require('./item10');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

module.exports = taxableCharge;
