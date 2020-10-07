const assert = require('chai').assert;
const expect = require('chai').expect;

const getYoungestAndTotalSalary = require('../../src/ch8/item7');

describe('SplitLoop', function () {

    it ('getYoungestAndTotalSalary', function () {
        const people = [
            {age: 20, salary: 500},
            {age: 18, salary: 300},
            {age: 24, salary: 1000}
        ];
        expect(getYoungestAndTotalSalary(people)).equal("youngestAge: 18, totalSalary: 1800");
    });
});