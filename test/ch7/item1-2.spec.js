const assert = require('chai').assert;
const expect = require('chai').expect;

const { customerData, getRawDataOfCustomer, compareUsage, getCustomerData } = require('../../src/ch7/item1-2');

describe('EncapsulateRecord(nested record)', function () {

    let customerId, year, month;

    beforeEach(function () {
        customerId = '1920';
        year = 2016;
        month = 1;
    });

    it ('customer usage 읽기', function () {
        expect(getRawDataOfCustomer()[customerId].usages[year][month]).equal(50);
    });

    it ('customer usage 수정', function () {
        getCustomerData().setUsage(customerId, year, month, 60);
        expect(getRawDataOfCustomer()[customerId].usages[year][month]).equal(60);
    });

    it ('customer compaseUsage 읽기', function () {
        expect(compareUsage(customerId, year, 1)).to.deep.equal({laterAmount: 60, change: -10});
    });
});