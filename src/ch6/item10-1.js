'use strict';
const { acquireReading, baseRate, enrichReading } = require('./item10');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

module.exports = baseCharge;
