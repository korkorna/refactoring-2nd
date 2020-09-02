const assert = require('chai').assert;
const expect = require('chai').expect;

const {acquireReading, baseRate, taxThreshold} = require('../../src/ch6/item10');
const baseCharge = require('../../src/ch6/item10-1');
const taxableCharge = require('../../src/ch6/item10-2');
const baseChargeAmount = require('../../src/ch6/item10-3');


describe('Combine Functions into Transform(Client1)', function () {
    it ('baseCharge', function () {
       expect(baseCharge).equal(10);
    });
});

describe('Combine Functions into Transform(Client2)', function () {
    it ('taxableCharge', function () {
        expect(taxableCharge).equal(9.7);
    });
});

describe('Combine Functions into Transform(Client3)', function () {
    it ('baseChargeAmount', function () {
        expect(baseChargeAmount).equal(10);
    });
});