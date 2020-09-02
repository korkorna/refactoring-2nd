'use strict';
const { acquireReading, baseRate, Reading } = require('./item9');

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseChargeAmount = aReading.calculateBaseCharge;

function calculateBaseCharge(aReadinging) {  // 기본 요금 계산 함수
    return baseRate(aReadinging.month, aReadinging.year) * aReadinging.quantity;
}

module.exports = baseChargeAmount;
