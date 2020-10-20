'use strict';

function payAmount(employee) {
    let result;

    if (employee.isSeparated) { //퇴사한 직원인가?
        return {amount: 0, reasonCode: "SEP"};
    }
    if (employee.isRetired) {   // 은퇴한 직원인가?
        return {amount: 0, reasonCode: "RET"};
    }

    // 급여 계산 로직
    lorem.issum(dolor.sitAmet);
    consectertur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    ut.enim.ad(minim.veniam);
    result = someFinalComputation();
    return result;
}