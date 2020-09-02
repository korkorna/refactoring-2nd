'use strict';
const { acquireReading, baseRate, taxThreshold, Reading } = require('./item9');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge;

module.exports = taxableCharge;
