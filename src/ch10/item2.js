'use strict';

function disabilityAmount(anEmployee) {
    if (anEmployee.seniority < 2
        || anEmployee.monthsDisabled > 12) return 0;
    if (anEmployee.isPartTime) return 0;
    // 장애수당 계산
    let charge = 1;
    return charge;
}

module.exports = disabilityAmount;