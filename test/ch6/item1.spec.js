const assert = require('chai').assert;
const expect = require('chai').expect;

const printOwing = require('../../src/ch6/item1');
const Clock = require('../../src/ch6/clock');

const invoice = {
    customer : '고객1',
    orders : [
        {
            amount: 10
        }
    ]
}

describe('extractFunction', function() {

    it('printOwing', function() {
        let content = '';
        console.log = function (message) {
            content += message + "\n";
        };

        Clock.today = new Date(2020, 11, 1);

        const expected = "******************\n" +
            "**** 고객 채무 ****\n" +
            "******************\n" +
            "고객명: 고객1\n" +
            "채무액: 10\n" +
            "마감일: 12/31/2020\n";

        printOwing(invoice);
        expect(expected).equal(content);
    });
});