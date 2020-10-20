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

/**
 * and 사용하기
 *

 if (anEmployee.onVacation)
    if (anEmployee.seniority > 10)
        return 1;
    return 0.5;

 // and 연산 결합
 if ((anEmployee.onVacation)
     && (anEmployee.seniority > 10)) return 1;
 return 0.5;

module.exports = disabilityAmount;