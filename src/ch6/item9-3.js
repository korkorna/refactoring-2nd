'use strict';
const { acquireReading, baseRate, Reading } = require('./item9');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseChargeAmount = aReading.baseCharge;

module.exports = baseChargeAmount;
