'use strict';

let _customerData = {
    "1920": {
        name: "martin",
        id: "1920",
        usages: {
            "2016": {
                "1": 50,
                "2": 55
            },
            "2015": {
                "1": 70,
                "2": 63
            }
        }
    },
    "38673": {
        name: "neal",
        id: "38673",
        usages: {
            "2016": {
                "1": 50,
                "2": 55
            },
            "2015": {
                "1": 70,
                "2": 63
            }
        }
    }
};

class CustomerData {
    constructor(data) {
        this._data = data;
    }
}

let customerData = new CustomerData(_customerData);

function getRawDataOfCustomer() {
    return customerData._data;
}

function setRawDataOfCustomer(arg) {
    customerData = new CustomerData(arg);
}

function compareUsage (customerID, laterYear, month) {
    const later = getRawDataOfCustomer()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomer()[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}

function setUsage(customerId, year, month, amount) {
    getRawDataOfCustomer()[customerId].usages[year][month] = amount;
}

module.exports = {
    customerData,
    getRawDataOfCustomer,
    compareUsage,
    setUsage
};




