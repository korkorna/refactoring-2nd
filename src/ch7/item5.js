'use strict';

class Person {
    constructor(name, officeAreaCode, officeNumber) {
        this._name = name;
        this._telephoneNumber = new TelephoneNumber(officeAreaCode, officeNumber);
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get telephoneNumber() {
        return this._telephoneNumber.telephoneNumber;
    }

    get officeAreaCode() {
        return this._telephoneNumber.areaCode;
    }

    set officeAreaCode(value) {
        this._telephoneNumber.areaCode = value;
    }

    get officeNumber() {
        return this._telephoneNumber.number;
    }

    set officeNumber(value) {
        this._telephoneNumber.number = value;
    }
}

class TelephoneNumber {
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }
    get telephoneNumber() {
        return `(${this.areaCode}) ${this.number}`;
    }

    get areaCode() {
        return this._areaCode;
    }

    set areaCode(value) {
        this._areaCode = value;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }
}

module.exports = {
    Person, TelephoneNumber
};