const assert = require('chai').assert;
const expect = require('chai').expect;

const { Account, AccountType } = require('../../src/ch8/item1-2');

describe('MoveFunction-2', function () {

    it ('AccountType', function () {
        const type = new AccountType();
        expect(type.isPremium).equal(false);
    });

    it ('Account bankCharge', function () {
        const account = new Account();
        expect(account.bankCharge).equal(4.5);
    });

    it ('Account overdraftCharge', function () {
        const account = new Account();
        account.daysOverdrawn = 7;
        expect(account.overdraftCharge).equal(12.25);
    });

});