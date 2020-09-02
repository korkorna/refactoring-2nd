'use strict';
const { acquireReading, baseRate, taxThreshold, Reading } = require('./item9');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

module.exports = taxableCharge;
