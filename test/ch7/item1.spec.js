const assert = require('chai').assert;
const expect = require('chai').expect;

const { organization, getRawDataofOrganzation, getOrganization } = require('../../src/ch7/item1');

describe('EncapsulateRecord', function () {

    it ('organzation 읽기', function () {
       expect(getOrganization().name).equal('애크미 구스베리');
    });

    it ('organzation 수정', function () {
        getOrganization().name = '니콜라';
        expect(getOrganization().name).equal('니콜라');
    });
});