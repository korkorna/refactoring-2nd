const assert = require('chai').assert;
const expect = require('chai').expect;

const { speeds, plumages } = require('../../src/ch10/item4-1');

describe('Replace Conditional with Polymorphism', function () {

    let birds;

    beforeEach(function () {
        birds = [
            {name: '유럽제비', type: '유럽 제비', numberOfCoconuts: 2, isNailed: false, voltage: 500},
            {name: '아프리카제비', type: '아프리카 제비', numberOfCoconuts: 2, isNailed: false, voltage: 500},
            {name: '노르웨이파랑앵무', type: '노르웨이 파랑 앵무', numberOfCoconuts: 2, isNailed: true, voltage: 1000},
            {name: '한국제비', type: '한국제비', numberOfCoconuts: 2, isNailed: false, voltage: 500},
        ];
    })

    it ('plumages', function () {
        const expected = new Map();
        expected.set('유럽제비', '보통이다');
        expected.set('아프리카제비', '보통이다');
        expected.set('노르웨이파랑앵무', '예쁘다');
        expected.set('한국제비', '알 수 없다');
        console.log(plumages(birds));
        expect(plumages(birds)).to.deep.equal(expected);
    });

    it ('speeds', function () {
        const expected = new Map();
        expected.set('유럽제비', 35);
        expected.set('아프리카제비', 36);
        expected.set('노르웨이파랑앵무', 0);
        expected.set('한국제비', null);
        console.log(speeds(birds));
        expect(speeds(birds)).to.deep.equal(expected);
    });

});