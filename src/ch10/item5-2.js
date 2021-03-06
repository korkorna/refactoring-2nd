class Site {
    constructor(aCustomer) {
        this._customer = aCustomer;
    }

    get customer() {
        return (this._customer === "미확인 고객") ? createUnknownCustomer() : this._customer;
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

function createUnknownCustomer() {
    return {
        isUnknown: true,
        name: '거주자',
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
        },
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
        const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
    }
}
