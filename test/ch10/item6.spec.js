const assert = require('chai').assert;
const expect = require('chai').expect;

const Customer = require('../../src/ch10/item6');

describe('Introduce Assertion', function () {

    it ('applyDiscount 양수', function () {
        const customer = new Customer('마틴', 0.02);
        const expected = 970;
        expect(customer.applyDiscount(1000)).equal(expected);
    });
});