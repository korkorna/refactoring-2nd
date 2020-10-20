const assert = require('chai').assert;
const expect = require('chai').expect;

const { rating } = require('../../src/ch10/item4-2');

describe('Replace Conditional with Polymorphism', function () {
    it ('rating', function () {
        const voyage = {length: 10, zone:'서인도'};
        const history = [
            {zone:'동인도', profit: 5},
            {zone:'서인도', profit: 15},
            {zone:'중국', profit: -2},
            {zone:'서아프리카', profit: 7}
        ];
        expect(rating(voyage, history)).equal('B');
    });
});