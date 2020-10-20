'use strict';

function disabilityAmount(anEmployee) {
    if (anEmployee.seniority < 2
        || anEmployee.monthsDisabled > 12
        || anEmployee.isPartTime) return 0;
    // 장애수당 계산
    let charge = 1;
    return charge;
}

module.exports = disabilityAmount;