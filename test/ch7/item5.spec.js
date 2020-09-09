const assert = require('chai').assert;
const expect = require('chai').expect;

const { Person, TelephoneNumber } = require('../../src/ch7/item5');

describe('Extract Class', function () {

    it('person', function () {
        const person = new Person('마틴 파울러', '82', '123-1234');
        expect(person.name).equal('마틴 파울러');
        expect(person.telephoneNumber).equal('(82) 123-1234');
    });

    it('telephoneNumber', function () {
        const telephoneNumber = new TelephoneNumber('82', '123-1234');
        expect(telephoneNumber.areaCode).equal('82');
        expect(telephoneNumber.officeNumber).equal('123-1234');
    });
});