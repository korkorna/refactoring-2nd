'use strict';
const { acquireReading, baseRate, taxThreshold } = require('./item9');

const aReadinging = acquireReading();
const base = (baseRate(aReadinging.month, aReadinging.year) * aReadinging.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReadinging.year));

module.exports = taxableCharge;
