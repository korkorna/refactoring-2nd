'use strict';

class Site {
    constructor(aCustomer) {
        this._customer = aCustomer;
    }

    get customer() {
        return (this._customer === '미확인 고객') ? new UnknownCustomer() : this._customer;
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
    if (!((arg instanceof Customer) || (arg instanceof UnknownCustomer)))
        throw new Error('잘못된 값과 비교: <${arg}>');
    return arg.isUnknown();
}

class Client1 {
    run () {
        const aCustomer = site.customer;
        // ... 수많은 코드 ...
        let customerName;
        if (isUnkown(aCustomer)) customerName = "거주자";
        else customerName = aCustomer.name;
    }
}

class Client2 {
    run () {
        const aCustomer = site.customer;

        const plan = (isUnkown(aCustomer)) ?
            registry.billingPlans.basic
            : aCustomer.billingPlan;
    }
}

class Client3 {
    run() {
        const aCustomer = site.customer;

        if (!isUnkown(aCustomer)) aCustomer.billingPlan = newPlan;
    }
}

class Client4 {
    run() {
        const aCustomer = site.customer;

        const weeksDelinquent = (isUnkown(aCustomer)) ?
            0
            : aCustomer.paymentHistory.weeksDelinquentInLastYear;
    }
}