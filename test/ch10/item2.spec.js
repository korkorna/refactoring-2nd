const assert = require('chai').assert;
const expect = require('chai').expect;

const disabilityAmount = require('../../src/ch10/item2');

describe('Consolidate Conditional Expression', function () {

    it ('disabilityAmount 장애수당', function () {
        const employee = {
            seniority: 3,
            monthsDisabled:  6,
            isPartTime: false
        }
        expect(disabilityAmount(employee)).equal(1);
    });

    it ('disabilityAmount seniority', function () {
        const employee = {
            seniority: 1,
            monthsDisabled:  6,
            isPartTime: false
        }
        expect(disabilityAmount(employee)).equal(0);
    });

    it ('disabilityAmount months Disabled', function () {
        const employee = {
            seniority: 1,
            monthsDisabled: 13,
            isPartTime: false
        }
        expect(disabilityAmount(employee)).equal(0);
    });


    it ('disabilityAmount is Part Time', function () {
        const employee = {
            seniority: 1,
            monthsDisabled: 6,
            isPartTime: true
        }
        expect(disabilityAmount(employee)).equal(0);
    });

});