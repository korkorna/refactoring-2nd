const assert = require('chai').assert;
const expect = require('chai').expect;

const Employee = require('../../src/ch11/item8');

describe('Replace Constructor With Factory Function', function () {

    it ('employee', function () {
        const document = {
            name: '마틴',
            empType: 'M'
        };
        const emp = new Employee(document.name, document.empType);
    });

});