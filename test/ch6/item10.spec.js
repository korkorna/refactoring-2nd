const assert = require('chai').assert;
const expect = require('chai').expect;
const _ = require('lodash');

const {acquireReading, baseRate, taxThreshold, enrichReading} = require('../../src/ch6/item10');
const baseCharge = require('../../src/ch6/item10-1');
const taxableCharge = require('../../src/ch6/item10-2');
const baseChargeAmount = require('../../src/ch6/item10-3');

describe('Combine Functions into Transform', function () {
    it ('check reading unchanged', function () {
        const baseReading = {customer: "ivan", quantity: 10, month: 5,year: 2017};
        const oracle = _.cloneDeep(baseReading);
        enrichReading(baseReading);
        assert.deepEqual(baseReading, oracle);
    });
});

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