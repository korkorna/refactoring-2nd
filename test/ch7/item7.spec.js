const assert = require('chai').assert;
const expect = require('chai').expect;

const { Person, Department } = require('../../src/ch7/item7');

describe('hideDelegate', function () {
    let person;

    beforeEach(function () {
        let manager = new Person('매니저');
        let department = new Department();
        department.manager = manager;

        person = new Person('마틴');
        person.department = department;
    })

    it('manager 조회', function () {
        const expected = '매니저';
        expect(person.manager.name).equal(expected);
    });

});

