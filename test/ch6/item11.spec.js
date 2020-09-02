const assert = require('chai').assert;
const expect = require('chai').expect;

const priceOrder = require('../../src/ch6/item11')

const product = {
    basePrice: 100,
    discountRate: 0.8,
    discountThreshold: 5
};

const shippingMethod = {
    discountThreshold: 10,
    feePerCase: 5,
    discountedFee: 3
};

describe('Split Phase', function () {
   it ('priceOrder', function () {
       expect(priceOrder(product, 10, shippingMethod)).equal(630);
   });
});