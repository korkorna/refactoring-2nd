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



class Client1 {
    run () {
        const site = acquireSiteData();
        const aCustomer = site.customer;
        // ...
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
        const aCustomer = site.customer
        const weeksDelinquent = (aCustomer === "미확인 고객") ?
            0
            : aCustomer.paymentHistory.weeksDelinquentInLastYear;
    }
}