const assert = require('chai').assert;
const expect = require('chai').expect;

const price = require('../../src/ch6/item3');

const order = {
    quantity: 5,
    itemPrice: 120
};

describe('price', function () {
   it('success', function () {
       const expected = 660;
       expect(expected).equal(price(order));
   });
});