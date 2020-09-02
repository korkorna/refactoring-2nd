'use strict';
const { acquireReading, baseRate } = require('./item9');

const aReadinging = acquireReading();
const baseCharge = baseRate(aReadinging.month, aReadinging.year) * aReadinging.quantity;

module.exports = baseCharge;
