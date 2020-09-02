'use strict';
const { acquireReading, baseRate } = require('./item9');

const aReadinging = acquireReading();
const baseChargeAmount = calculateBaseCharge(aReadinging);

function calculateBaseCharge(aReadinging) {  // 기본 요금 계산 함수
    return baseRate(aReadinging.month, aReadinging.year) * aReadinging.quantity;
}

module.exports = baseChargeAmount;
