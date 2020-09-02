'use strict';
const { acquireReading, baseRate, enrichReading } = require('./item10');

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

module.exports = baseCharge;
