const assert = require('chai').assert;
const expect = require('chai').expect;

const { Account, AccountType } = require('../../src/ch8/item2-2');

describe('MoveField-2', function () {

    it ('Account', function () {
        const account = new Account(1, new AccountType("입출력통장"), 0.02);
        expect(account.interestRate).equal(0.02);
    });
});