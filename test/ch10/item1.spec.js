const assert = require('chai').assert;
const expect = require('chai').expect;

const { charge, CustomDate } = require('../../src/ch10/item1');

describe('Decompose Conditional', function () {

    it ('summer charge', function () {
        const now = new CustomDate(new Date(2020,8,20));
        const quantity = 10;
        const expected = 2;
        expect(charge(now, quantity)).equal(expected);
    });

    it ('regular charge', function () {
        const now = new CustomDate(new Date(2020,10,20));
        const quantity = 10;
        const expected = 100.5;
        expect(charge(now, quantity)).equal(expected);
    });

});

describe('CustomDate', function () {

    it ('instance', function () {
        const now = new CustomDate();
    });

    it ('isBefore true', function () {
        const now = new CustomDate(new Date(2020,10,20));
        expect(now.isBefore(new Date(2020, 10, 21))).equal(true);
    });
    it ('isBefore false', function () {
        const now = new CustomDate(new Date(2020,10,20));
        expect(now.isBefore(new Date(2020, 10, 19))).equal(false);
    });

    it ('isAfter false', function () {
        const now = new CustomDate(new Date(2020,10,20));
        expect(now.isAfter(new Date(2020, 10, 21))).equal(false);
    });
    it ('isAfter true', function () {
        const now = new CustomDate(new Date(2020,10,20));
        expect(now.isAfter(new Date(2020, 10, 19))).equal(true);
    });

});