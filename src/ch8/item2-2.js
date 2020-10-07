'use strict';
const assert = require('chai').assert;

class Account {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
    }

    get interestRate() {
        return this._type.interestRate;
    }
}

class AccountType {
    constructor(nameString, interestRate) {
        this._name = nameString;
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._interestRate;
    }
}

module.exports = {
    Account,
    AccountType
}