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
    get name() {
        return '거주자';
    }
    get isUnknown() {
        return true;
    }
    get billingPlan() {
        return registry.billingPlans.basic;
    }
    set billingPlan(arg) { }

    get paymentHistory() {
        return new NullPaymentHistory();
    }
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {
        return 0;
    }
}

class Client1 {
    run () {
        const aCustomer = site.customer;
        // ... 수많은 코드 ...
        let customerName = aCustomer.name;
    }
}

class Client2 {
    run () {
        const aCustomer = site.customer;
        const plan = aCustomer.billingPlan;
    }
}

class Client3 {
    run() {
        const aCustomer = site.customer;
        aCustomer.billingPlan = newPlan;
    }
}

class Client4 {
    run() {
        const aCustomer = site.customer;
        const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
    }
}

