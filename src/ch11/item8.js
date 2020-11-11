'use strict';

class Employee {
    constructor(name, typeCode) {
        this._name = name;
        this._typeCode = typeCode;
    }

    get name() {
        return this._name;
    }

    get typeCode() {
        return this._typeCode;
    }

    static get legalTypeCodes() {
        return {"E": "Engineer", "M": "Manger", "S": "Salesperson"};
    }
}

function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
}

class Client1 {
    run(document) {
        const candidate = new Employee(document.name, document.empType);
    }
}

class Client2 {
    run(document) {
        const candidate = new Employee(document.name, 'E');
    }
}

module.exports = Employee;