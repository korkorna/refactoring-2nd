'use strict';

function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability()) return 0;
    // 장애수당 계산
    let charge = 1;
    return charge;

    function isNotEligibleForDisability() {
        return anEmployee.seniority < 2
            || anEmployee.monthsDisabled > 12
            || anEmployee.isPartTime;
    }
}

module.exports = disabilityAmount;