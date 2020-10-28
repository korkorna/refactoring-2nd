'use strict';

const site_1 = {
    name : '애크미 보스턴',
    location: 'Malden MA',
    customer: {
        name: '애크미 산업',
        billingPlan: 'plan-451',
        paymentHistory: {
            weeksDelinquentInLastYYear: 7
        }
    }
}

const site_2 = {
    name : '물류창고 15',
    location: 'Malden MA',
    customer: '미확인 고객'
}

function acquireSiteData() {
    return (Math.random() >= 0.5) ? site_1 : site_2;
}

function enrichSite(inputSite) {
    const result = _.cloneDeep(inputSite);
    const unknownCustomer = {
        isUnknown : true,
        name: '거주자',
        billingPlan: registry.billingPlans.basic,
    };
    if (isUnknown(result.customer)) {
        result.customer = unknownCustomer;
    } else {
        result.customer.isUnknown = false;
    }
    return result;
}

function isUnknown(aCustomer) {
    if (aCustomer === "미확인 고객") {
        return true;
    }
    return aCustomer.isUnknown;
}

class Client1 {
    run () {
        const rawSite = acquireSiteData();
        const site = enrichSite(rawSite);
        const aCustomer = site.customer;
        // ...
        const customerName = aCustomer.name;
    }
}

class Client2 {
    run () {
        const rawSite = acquireSiteData();
        const site = enrichSite(rawSite);
        const aCustomer = site.customer;
        const plan = aCustomer.billingPlan;
    }
}

class Client3 {
    run() {
        const rawSite = acquireSiteData();
        const site = enrichSite(rawSite);
        const aCustomer = site.customer
        const weeksDelinquent = isUnknown(aCustomer) ?
            0
            : aCustomer.paymentHistory.weeksDelinquentInLastYear;
    }
}