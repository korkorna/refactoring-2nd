const assert = require('chai').assert;
const expect = require('chai').expect;

const foundPerson = require('../../src/ch7/item9');

describe('substitute algorithm', function () {

    it('found person', function () {
        const people = ['Dan', 'Jo', 'Kent'];
        const expected = 'Kent';
        expect(foundPerson(people)).equal(expected);
    });

    it('notfound person', function () {
        const people = ['Dan', 'Jo', 'Kont'];
        const expected = '';
        expect(foundPerson(people)).equal(expected);
    });
});

