'use strict';

const _ = require('lodash');

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

    setUsage(customerId, year, month, amount) {
        this._data[customerId].usages[year][month] = amount;
    }

    usage(customerId, year, month) {
        return this._data[customerId].usages[year][month];
    }

    get rawData() {
        return _.cloneDeep(this._data);
    }
}

let customerData = new CustomerData(_customerData);

function getCustomerData() {
    return customerData;
}

function getRawDataOfCustomer() {
    return customerData._data;
}

function setRawDataOfCustomer(arg) {
    customerData = new CustomerData(arg);
}

function compareUsage (customerID, laterYear, month) {
    const later = getCustomerData().rawData[customerID].usages[laterYear][month];
    const earlier = getCustomerData().rawData[customerID].usages[laterYear-1][month];
    return {laterAmount: later, change: later - earlier};
}

module.exports = {
    customerData,
    getRawDataOfCustomer,
    compareUsage,
    getCustomerData
};




