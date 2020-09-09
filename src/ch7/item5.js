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
        return this._telephoneNumber._officeNumber;
    }

    set officeNumber(value) {
        this._telephoneNumber._officeNumber = value;
    }
}

class TelephoneNumber {
    constructor(areaCode, officeNumber) {
        this._areaCode = areaCode;
        this._officeNumber = officeNumber;
    }
    get telephoneNumber() {
        return `(${this.areaCode}) ${this.officeNumber}`;
    }

    get areaCode() {
        return this._areaCode;
    }

    set areaCode(value) {
        this._areaCode = value;
    }

    get officeNumber() {
        return this._officeNumber;
    }

    set officeNumber(value) {
        this._officeNumber = value;
    }
}

module.exports = {
    Person, TelephoneNumber
};