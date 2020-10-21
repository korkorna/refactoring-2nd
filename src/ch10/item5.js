'use strict';

class Site {
    constructor(aCustomer) {
        this._customer = aCustomer;
    }

    get customer() {
        return this._customer;
    }
}

class Customer {
    constructor(name, billingPlan, paymentHistory) {
        this._name = name;
        this._billgingPlan = billingPlan;
        this._paymentHistory = paymentHistory;
    }

    get name() {
        return this._name;
    }
    get billingPlan() {
        return this._billingPlan;
    }
    set billingPlan(arg) {
        this._billgingPlan = arg;
    }
    get paymentHistory() {
        return this._paymentHistory;
    }
    get isUnknown() {
        return false;
    }
}

class UnknownCustomer {
    get isUnknown() {
        return true;
    }
}

function isUnkown(arg) {
    if (!((arg instanceof Customer) || (arg === '미확인 고객')))
        throw new Error('잘못된 값과 비교: <${arg}>');
    return (arg === '미확인 고객');
}

class Client1 {
    run () {
        const aCustomer = site.customer;
        // ... 수많은 코드 ...
        let customerName;
        if (aCustomer === "미확인 고객") customerName = "거주자";
        else customerName = aCustomer.name;
    }
}

class Client2 {
    run () {
        const aCustomer = site.customer;

        const plan = (aCustomer === "미확인 고객") ?
            registry.billingPlans.basic
            : aCustomer.billingPlan;
    }
}

class Client3 {
    run() {
        const aCustomer = site.customer;

        if (aCustomer !== '미확인 고객') aCustomer.billingPlan = newPlan;
    }
}

class Client4 {
    run() {
        const aCustomer = site.customer;

        const weeksDelinquent = (aCustomer === "미확인 고객") ?
            0
            : aCustomer.paymentHistory.weeksDelinquentInLastYear;
    }
}