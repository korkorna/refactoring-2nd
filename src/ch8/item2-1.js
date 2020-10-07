'use strict';

function dateToday() {
    return new Date();
}

class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._contract = new CustomerContract(dateToday());
        this._setDiscountRate(discountRate);
    }

    get discountRate() { return this._contract.discountRate; }
    _setDiscountRate(aNumber) {this._contract.discountRate = aNumber;}  // public setter를 만들고 싶지 않아서
    becomePreferred() {
        this._setDiscountRate(0.03);
        // 다른 멋진 일들
    }
    applyDiscount(amount) {
        return amount.subtract(amount.multiple(this.discountRate));
    }
}

class CustomerContract {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }
    
    get discountRate() {
        return this._discountRate;
    }

    set discountRate(value) {
        this._discountRate = value;
    }
}

class Money {
    constructor(value) {
        this._value = value;
    }

    subtract(amount) {
        return new Money(this._value - amount._value);
    }
    multiple(discountRate) {
        return new Money(this._value * discountRate);
    }
}

module.exports = {
    Customer,
    CustomerContract,
    Money
}