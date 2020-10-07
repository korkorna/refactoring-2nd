'use strict';
const assert = require('chai').assert;

class Account {
    constructor(number, type, interestRate) {
        this._number = number;
        this._type = type;
        assert(interestRate == this._type.interestRate);  // 충분히 검증이 된 이후 _type의 필드를 사용하도록 수정
        this._interestRate = interestRate;
    }

    get interestRate() {
        return this._interestRate;
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