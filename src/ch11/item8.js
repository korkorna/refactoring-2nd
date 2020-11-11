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

// 타입별로 팩토리함수를 만들자 
function createEnginner(name) {
    return new Employee(name, 'E');
}

class Client1 {
    run(document) {
        const candidate = createEmployee(document.name, document.empType);
    }
}

class Client2 {
    run(document) {
        const candidate = createEmployee(document.name, 'E');
    }
}

module.exports = {
    Employee,
    createEmployee
};