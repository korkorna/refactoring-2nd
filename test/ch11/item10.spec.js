const assert = require('chai').assert;
const expect = require('chai').expect;

const charge = require('../../src/ch11/item10');

describe('Replace Command with Function', function () {

    it ('charge', function () {
        const customer= {
            baseRate: 10,
        }
        const usage = 100;
        const provider =  {connectionCharge: 20};
        expect(charge(customer, usage, provider)).equal(1020);
    });

});