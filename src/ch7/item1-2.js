'use strict';

let customerData = {
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

function getRawDataOfCustomer() {
    return customerData;
}

function setRawDataOfCustomer(arg) {
    customerData = arg;
}

function compareUsage (customerID, laterYear, month) {
    const later = getRawDataOfCustomer()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomer()[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
}

module.exports = {
    customerData,
    getRawDataOfCustomer,
    compareUsage
};




