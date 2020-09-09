const assert = require('chai').assert;
const expect = require('chai').expect;

const { organization, getRawDataofOrganzation } = require('../../src/ch7/item1');

describe('EncapsulateRecord', function () {

    it ('organzation 읽기', function () {
       expect(getRawDataofOrganzation().name).equal('애크미 구스베리');
    });

    it ('organzation 수정', function () {
        getRawDataofOrganzation().name = '니콜라';
        expect(getRawDataofOrganzation().name).equal('니콜라');
    });
});