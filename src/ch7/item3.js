'use strict';

class Order {
    constructor(data) {
        this._priority = new Priority(data.priority);
    }

    get priority() {return this._priority.toString();}
    set priority(aString) {this._priority = new Priority(aString);}
}

class Priority {
    constructor(value) {
        this._value = value;
    }
    toString() {return this._value;}
}

module.exports = {
    Order,Priority
};