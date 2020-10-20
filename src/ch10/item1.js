'use strict';

const plan = {
    summerStart : new Date(2020, 7, 1),
    summerEnd : new Date(2020, 8, 31),
    summerRate: 0.20,
    regularRate: 0.05,
    reqularServiceCharge: 100
};

function charge(aDate, quantity) {
    let charge = 0.0;
    if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
        charge = quantity * plan.summerRate;
    } else {
        charge = quantity * plan.regularRate + plan.reqularServiceCharge;
    }
    return charge
}

class CustomDate {
    constructor(aDate = new Date()) {
        this.date = aDate;
    }

    isBefore(aDate) {
        return this.date < aDate;
    }

    isAfter(aDate) {
        return this.date >= aDate;
    }
}

module.exports = {
    charge,
    CustomDate
};