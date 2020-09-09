'use strict';

class Order {
    constructor(data) {
        this._priority = data.priority;
    }

    get priority() {return this._priority;}
    set priority(aString) {this._priority = aString;}
}

class Prioirty {
    constructor(value) {
        this._value = value;
    }
    toString() {return this._value;}
}

module.exports = {
    Order,Prioirty
};