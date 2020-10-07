const assert = require('chai').assert;
const expect = require('chai').expect;

const { Customer, CustomerContract, Money } = require('../../src/ch8/item2-1');

describe('MoveField-1', function () {

    it ('Customer', function () {
        const customer = new Customer("마틴", 0.01);
        expect(customer.applyDiscount(new Money(100))).to.eql(new Money(99));
    });


    it ('Money subtract', function () {
       const money = new Money(100);
        expect(money.subtract(new Money(100))).to.eql(new Money(0));
    });

    it ('Money multiple', function () {
        const money = new Money(100);
        expect(money.multiple(0.05)).to.eql(new Money(5));
    });
});